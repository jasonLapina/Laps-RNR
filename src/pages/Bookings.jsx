import { Heading } from "@chakra-ui/react";
import BookingsTable from "../features/Bookings/BookingsTable";
import useBookings from "../features/Bookings/useBookings";
//
function Bookings() {
  const { data: bookings, isLoading } = useBookings();
  if (isLoading) return <div />;
  console.log(bookings);
  return (
    <>
      <Heading mb='32px'>Bookings</Heading>
      <BookingsTable bookings={bookings} />
    </>
  );
}

export default Bookings;
