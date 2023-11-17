import supabase from "./supabase";

export async function getBookings() {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cabins(name), guests(name,email)");

  if (error) {
    console.error(error);
    throw new Error("Bookings could not be loaded");
  }

  return data;
}

export async function getBookingsAfterDate(date) {
  const { data, error } = await supabase.from("bookings").select().gte("").lte;

  if (error) {
    console.error(error);
    throw new Error("Bookings could not be loaded");
  }

  return data;
}
