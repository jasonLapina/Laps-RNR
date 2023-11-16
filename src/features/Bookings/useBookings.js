import { useQuery } from "react-query";
import { getBookings } from "../../services/apiBookings";

export default function useBookings() {
  const { data, isLoading } = useQuery({
    queryFn: getBookings,
    queryKey: "bookings",
  });
  return { data, isLoading };
}
