import supabase from "./supabase";
export async function getSettings() {
  let { data, error } = await supabase.from("settings").select("*");

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }

  return data;
}

export async function updateSetting(settings) {
  const { data, error } = await supabase
    .from("settings")
    .update(settings)
    .eq("id", 1)
    .single();
  if (error) {
    console.error(error);
    throw new Error("Settings could not be updated");
  }

  return data;
}
