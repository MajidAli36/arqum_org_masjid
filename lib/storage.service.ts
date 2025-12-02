import { supabase } from "./supabase";

export type StorageImage = {
  name: string;
  url: string;
};

// Project defaults:
// - Supabase Storage bucket name: "Public"
// - Folder inside that bucket for homepage assets: "Home"
const DEFAULT_BUCKET = "Public";
const DEFAULT_FOLDER = "Home";

/**
 * Fetch all public image URLs from a given folder inside a Supabase Storage bucket.
 */
export async function getImagesFromFolder(
  bucket: string,
  folder: string
): Promise<StorageImage[]> {
  const { data, error } = await supabase.storage.from(bucket).list(folder, {
    limit: 100,
    offset: 0,
  });

  if (error || !data) {
    console.error(
      "[storage.service] Failed to list images from folder",
      { bucket, folder },
      error
    );
    return [];
  }

  return data
    .filter((item) => !item.name.startsWith("."))
    .map((item) => {
      const path = `${folder}/${item.name}`;
      const {
        data: { publicUrl },
      } = supabase.storage.from(bucket).getPublicUrl(path);

      if (!publicUrl) {
        console.warn(
          "[storage.service] No public URL returned; bucket may not be public",
          { bucket, path }
        );
      } else if (!publicUrl.includes("/public/")) {
        console.warn(
          "[storage.service] Bucket might not be configured as public",
          { bucket, path, publicUrl }
        );
      }

      return {
        name: item.name,
        url: publicUrl,
      };
    });
}

/**
 * Get a public URL for a single file path inside the given bucket.
 */
export function getPublicImageUrl(
  path: string,
  bucket: string = DEFAULT_BUCKET
): string | null {
  const {
    data: { publicUrl },
  } = supabase.storage.from(bucket).getPublicUrl(path);

  if (!publicUrl) {
    console.warn(
      "[storage.service] No public URL returned; bucket may not be public",
      { bucket, path }
    );
    return null;
  }

  if (!publicUrl.includes("/public/")) {
    console.warn(
      "[storage.service] Bucket might not be configured as public",
      { bucket, path, publicUrl }
    );
  }

  return publicUrl;
}

/**
 * Resolve any hero / section image reference into a usable public URL.
 *
 * Supports:
 * - Empty/undefined → null
 * - Full http(s) URL → returned as‑is
 * - "fortdoge-masjid.jpg" → "Home/fortdoge-masjid.jpg" in bucket "Public"
 * - "Home/fortdoge-masjid.jpg" → stored as‑is in bucket "Public"
 * - Legacy "/images/xxx.png" or "images/xxx.png" → "Home/xxx.png" in bucket "Public"
 */
export function resolveStorageImageUrl(
  path?: string,
  opts?: { bucket?: string; folder?: string }
): string | null {
  if (!path) return null;

  // Reject blob URLs - these are temporary browser URLs and should not be stored
  if (path.startsWith("blob:")) {
    console.warn("[storage.service] Blob URL detected, rejecting:", path);
    return null;
  }

  // If it's already an absolute URL (but not blob), just return it.
  if (path.startsWith("http://") || path.startsWith("https://")) {
    console.log("[Resolved Supabase URL] (absolute)", path);
    return path;
  }

  const bucket = opts?.bucket ?? DEFAULT_BUCKET;
  const folder = opts?.folder ?? DEFAULT_FOLDER;

  // Handle legacy "/images/xxx.png" or "images/xxx.png" paths by mapping into the
  // configured folder (e.g. "Home/xxx.png" in the "Public" bucket).
  const isLegacyImagesPath =
    path.startsWith("/images/") || path.startsWith("images/");
  if (isLegacyImagesPath) {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const legacyFullPath = `${folder}/${fileName}`;

    const legacyUrl = getPublicImageUrl(legacyFullPath, bucket);
    if (!legacyUrl) {
      console.warn("[storage.service] Failed to resolve legacy /images path", {
        bucket,
        legacyFullPath,
      });
      return null;
    }

    console.log("[Resolved Supabase URL] (legacy /images)", legacyUrl);
    return legacyUrl;
  }

  // Normalize path; if it does not contain "/", prepend the folder.
  const trimmed = path.startsWith("/") ? path.slice(1) : path;
  const fullPath = trimmed.includes("/") ? trimmed : `${folder}/${trimmed}`;

  const publicUrl = getPublicImageUrl(fullPath, bucket);

  if (!publicUrl) {
    console.warn(
      "[storage.service] Failed to resolve storage image URL",
      { bucket, fullPath }
    );
    return null;
  }

  console.log("[Resolved Supabase URL]", publicUrl);
  return publicUrl;
}
