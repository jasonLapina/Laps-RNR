import { getToday } from "../utils/helpers";
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
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at, totalPrice, extrasPrice")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error("Bookings could not be loaded");
  }

  return data;
}

export async function getStaysAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName)")
    .gte("startDate", date)
    .lte("startDate", getToday());
  if (error) {
    console.error(error);
    throw new Error("Stays could not be loaded");
  }

  return data;
}
