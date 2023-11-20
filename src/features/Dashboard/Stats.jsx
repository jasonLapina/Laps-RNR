import { Th } from "@chakra-ui/react";
import Stat from "./Stat";
import { HiOutlineBriefcase } from "react-icons/hi";
import { formatCurrency } from "../../utils/helpers";
function Stats({ bookings, confirmedStays }) {
  const numBookings = bookings?.length;
  const numStays = confirmedStays.length;

  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);
  return (
    <>
      <Th>
        <Stat
          title='Bookings'
          color='blue.500'
          icon={HiOutlineBriefcase}
          value={numBookings}
        />
      </Th>
      <Th>
        <Stat
          title='Sales'
          color='blue.500'
          icon={HiOutlineBriefcase}
          value={formatCurrency(sales)}
        />
      </Th>
      <Th>
        <Stat
          title='Check ins'
          color='blue.500'
          icon={HiOutlineBriefcase}
          value={numBookings}
        />
      </Th>
      <Th>
        <Stat
          title='Occupancy'
          color='blue.500'
          icon={HiOutlineBriefcase}
          value={numStays}
        />
      </Th>
    </>
  );
}

export default Stats;
