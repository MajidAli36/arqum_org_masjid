import { supabase } from "./supabase";

/**
 * Generic configuration wrapper for a section on the home page.
 *
 * Each section can be toggled via `enabled` and can contain arbitrary `data`
 * which is then mapped to the relevant component props in `app/page.tsx`.
 */
export type HomeSectionConfig<TData = any> = {
  enabled?: boolean | null;
  data?: TData | null;
};

/**
 * Shape of the JSON `data` column we store in the `Home` table.
 *
 * We keep the type fairly loose but still declare the keys that are
 * referenced in `app/page.tsx` so TypeScript understands them.
 */
export type HomeContentJson = {
  heroSection?: HomeSectionConfig;
  prayerTime?: HomeSectionConfig;
  fridayPrayers?: HomeSectionConfig;
  donation?: HomeSectionConfig;
  infoBanner?: HomeSectionConfig;
  quickLinks?: HomeSectionConfig; // Supabase uses "quickLinks" key
  calendar?: HomeSectionConfig;

  // Allow additional keys for future / admin-configured sections.
  [key: string]: unknown;
};

/**
 * Row type for the `Home` table in Supabase.
 *
 * Adjust fields here if your actual table has a different shape.
 */
export type HomeContent = {
  id: number;
  data: HomeContentJson | null;
  created_at?: string | null;
  updated_at?: string | null;

  // Allow other columns without breaking the type.
  [key: string]: unknown;
};

const HOME_TABLE = "Home";

/**
 * Fetch the single "Home" row from Supabase.
 *
 * This is used by the main home page and by the `/api/test-home` endpoint.
 * If anything goes wrong or the row is missing, we return `null` and let the
 * caller handle defaults.
 */
export async function getHomeContent(): Promise<HomeContent | null> {
  const { data, error } = await supabase
    .from(HOME_TABLE)
    .select("*")
    .single();

  if (error) {
    console.error("[home.service] Failed to fetch Home content:", error);
    return null;
  }

  return data ?? null;
}

/**
 * Update a specific section in the Home table.
 * 
 * This function updates the JSON `data` column by merging the new section
 * data with the existing data, preserving other sections.
 */
export async function updateHomeSection(
  sectionKey: string,
  sectionData: HomeSectionConfig
): Promise<{ success: boolean; error?: string; data?: HomeContent }> {
  try {
    console.log("[home.service] updateHomeSection called:", { sectionKey, sectionData });
    
    // First, get the current data
    const current = await getHomeContent();
    console.log("[home.service] Current data:", current);
    
    if (!current) {
      // If no row exists, create one
      const newData: HomeContentJson = {
        [sectionKey]: sectionData,
      };
      
      console.log("[home.service] Creating new row with data:", newData);
      
      const { data: insertData, error: insertError } = await supabase
        .from(HOME_TABLE)
        .insert({ data: newData })
        .select()
        .single();

      if (insertError) {
        console.error("[home.service] Failed to create Home row:", insertError);
        return { success: false, error: insertError.message };
      }

      console.log("[home.service] Successfully created row:", insertData);
      return { success: true, data: insertData };
    }

    // Merge the new section with existing data
    const updatedData: HomeContentJson = {
      ...(current.data || {}),
      [sectionKey]: sectionData,
    };

    console.log("[home.service] Merged data to update:", updatedData);
    console.log("[home.service] Updating row ID:", current.id);

    // Update the row
    const { data: updateData, error: updateError } = await supabase
      .from(HOME_TABLE)
      .update({ 
        data: updatedData,
        updated_at: new Date().toISOString(),
      })
      .eq("id", current.id)
      .select()
      .single();

    if (updateError) {
      console.error("[home.service] Failed to update Home section:", updateError);
      return { success: false, error: updateError.message };
    }

    console.log("[home.service] Successfully updated row:", updateData);
    return { success: true, data: updateData };
  } catch (error: any) {
    console.error("[home.service] Error updating Home section:", error);
    return { success: false, error: error?.message ?? String(error) };
  }
}


