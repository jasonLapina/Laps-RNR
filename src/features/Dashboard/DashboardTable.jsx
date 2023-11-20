import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import Stats from "./Stats";

function DashboardTable({ bookings, confirmedStays }) {
  return (
    <>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Stats bookings={bookings} confirmedStays={confirmedStays} />
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>herrow?</Td>
              {/* <Td>herrow?</Td>
              <Td>herrow?</Td> */}
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DashboardTable;
