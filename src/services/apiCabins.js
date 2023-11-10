import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    // console.log("cabins could not be loaded");
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}
