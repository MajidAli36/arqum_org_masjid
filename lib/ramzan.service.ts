import { supabase } from "./supabase";

export type RamzanSectionConfig<TData = any> = {
  enabled?: boolean | null;
  data?: TData | null;
};

export type RamzanContentJson = {
  // We support two shapes to stay compatible with existing rows:
  // 1) Flat:   { page, hero, daily_lessons, ... }
  // 2) Nested: { page, data: { hero, daily_lessons, ... } }
  page?: string;
  heroSection?: RamzanSectionConfig;
  hero?: RamzanSectionConfig;
  daily_lessons?: RamzanSectionConfig;
  zakat_ul_fitr?: RamzanSectionConfig;
  community_iftars?: RamzanSectionConfig;
  data?: {
    heroSection?: RamzanSectionConfig;
    hero?: RamzanSectionConfig;
    daily_lessons?: RamzanSectionConfig;
    zakat_ul_fitr?: RamzanSectionConfig;
    community_iftars?: RamzanSectionConfig;
    [key: string]: unknown;
  } | null;

  [key: string]: unknown;
};

export type RamzanContent = {
  id: number;
  data: RamzanContentJson | null;
  created_at?: string | null;
  updated_at?: string | null;

  [key: string]: unknown;
};

const HOME_TABLE = "Home";

export async function getRamzanContent(): Promise<RamzanContent | null> {
  const { data, error } = await supabase
    .from(HOME_TABLE)
    .select("*")
    .eq("data->>page", "ramzan")
    .single();

  if (error) {
    console.error("[ramzan.service] Failed to fetch Ramzan content:", error);
    return null;
  }

  return (data as RamzanContent) ?? null;
}

export async function updateRamzanSection(
  sectionKey: string,
  sectionData: RamzanSectionConfig
): Promise<{ success: boolean; error?: string; data?: RamzanContent }> {
  try {
    console.log("[ramzan.service] updateRamzanSection called:", {
      sectionKey,
      sectionData,
    });

    const current = await getRamzanContent();

    if (!current) {
      // If no Ramzan row yet, create one using the nested { data: { ... } } shape
      const newInner: NonNullable<RamzanContentJson["data"]> = {
        [sectionKey]: sectionData,
      };
      const newData: RamzanContentJson = {
        page: "ramzan",
        data: newInner,
      };

      const { data: insertData, error: insertError } = await supabase
        .from(HOME_TABLE)
        .insert({ data: newData })
        .select()
        .single();

      if (insertError) {
        console.error(
          "[ramzan.service] Failed to create Ramzan row:",
          insertError
        );
        return { success: false, error: insertError.message };
      }

      return { success: true, data: insertData as RamzanContent };
    }

    const currentData: RamzanContentJson = (current.data || {}) as RamzanContentJson;

    // Prefer nested `data` object if it exists; otherwise, fall back to flat model.
    const hasNested =
      currentData.data && typeof currentData.data === "object";

    let updatedData: RamzanContentJson;

    if (hasNested) {
      const inner = currentData.data || {};
      const updatedInner: NonNullable<RamzanContentJson["data"]> = {
        ...inner,
        [sectionKey]: sectionData,
      };

      updatedData = {
        ...currentData,
        page: "ramzan",
        data: updatedInner,
      };
    } else {
      updatedData = {
        ...currentData,
        page: "ramzan",
        [sectionKey]: sectionData,
      };
    }

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
      console.error(
        "[ramzan.service] Failed to update Ramzan section:",
        updateError
      );
      return { success: false, error: updateError.message };
    }

    return { success: true, data: updateData as RamzanContent };
  } catch (error: any) {
    console.error("[ramzan.service] Error updating Ramzan section:", error);
    return { success: false, error: error?.message ?? String(error) };
  }
}


