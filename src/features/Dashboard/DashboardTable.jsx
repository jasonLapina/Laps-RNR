import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
function DashboardTable() {
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
          <Tr>
            <Td>herrow?</Td>
            <Td>herrow?</Td>
            <Td>herrow?</Td>
            <Td></Td>
            <Td>herrow?</Td>
            <Td></Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default DashboardTable;
