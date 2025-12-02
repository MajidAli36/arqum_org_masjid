import { supabase } from "./supabase";

/**
 * Configuration wrapper for an individual section on the home page.
 * The actual data shape is provided via the generic type argument.
 */
export interface HomeSectionConfig<T = unknown> {
  /** Whether this section should be rendered on the homepage */
  enabled?: boolean;
  /** Actual section data object for the section */
  data?: T;
  /** Any additional configuration for the section */
  [key: string]: unknown;
}

/**
 * JSON payload stored in the `content` column of the `home` / `Home` table.
 *
 * Each key corresponds to a section on the homepage.
 * The inner `data` values will be cast to the specific
 * component data types in the React layer.
 */
export interface HomeContentJson {
  heroSection?: HomeSectionConfig;
  prayerTime?: HomeSectionConfig;
  fridayPrayers?: HomeSectionConfig;
  donation?: HomeSectionConfig;
  quickLinks?: HomeSectionConfig;
  calendar?: HomeSectionConfig;
}

/**
 * Shape of a single row in the "home" / "Home" table.
 * The important field is the `content` JSON blob.
 */
export interface HomeContent {
  id: number;
  created_at: string;
  content: HomeContentJson | null;
}

const HOME_TABLE_CAMEL = "Home";
const HOME_TABLE_LOWER = "home";

/**
 * Fetches a single home row from Supabase for a given table name.
 * Throws an Error if Supabase returns an error.
 */
async function fetchSingleHomeRow(tableName: string): Promise<HomeContent | null> {
  const { data, error } = await supabase.from(tableName).select("*").single();

  // Temporary debug logs to understand why content is coming back as null.
  console.log(`[home.service] Fetching from table "${tableName}"`);
  console.log("[home.service] Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);

  if (error) {
    console.error(
      `[home.service] Failed to fetch home content from "${tableName}":`,
      error
    );
    throw new Error(
      `Failed to fetch home content from "${tableName}": ${error.message}`
    );
  }

  console.log("[home.service] Raw row from Supabase:", data);

  const row = data as any;

  const normalised: HomeContent = {
    id: row.id,
    created_at: row.created_at,
    content:
      row && typeof row.content === "object" ? (row.content as HomeContentJson) : null,
  };

  console.log("[home.service] Normalised content JSON:", normalised.content);

  return normalised;
}

/**
 * Fetches the single row of home page content from Supabase.
 *
 * - Tries the "Home" table first.
 * - If that fails for ANY reason, automatically falls back to "home".
 * - Returns `null` if both attempts fail.
 */
export async function getHomeContent(): Promise<HomeContent | null> {
  try {
    return await fetchSingleHomeRow(HOME_TABLE_CAMEL);
  } catch {
    try {
      return await fetchSingleHomeRow(HOME_TABLE_LOWER);
    } catch {
      return null;
    }
  }
}

