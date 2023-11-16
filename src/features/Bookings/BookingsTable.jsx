import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import EmptyData from "../../ui/EmptyData";
function BookingsTable({ bookings }) {
  if (!bookings || bookings.length === 0)
    return <EmptyData dataName={"cabins"} />;
  return (
    <TableContainer>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Cabin</Th>
            <Th>Guest</Th>
            <Th>Dates</Th>
            <Th>Status</Th>
            <Th>Amount</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {bookings.map((item, i) => (
            <Tr key={i}>
              <Td>herrow?</Td>
              <Td>herrow?</Td>
              <Td>herrow?</Td>
              <Td>{item.status}</Td>
              <Td>herrow?</Td>
              <Td></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default BookingsTable;
