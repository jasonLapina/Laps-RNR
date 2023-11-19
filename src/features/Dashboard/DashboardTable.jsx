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
            <Th>Statistics</Th>
            <Th>{"Today's activitiy"}</Th>
            <Th>Chart stay durations</Th>
            <Th>Chart sales</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>herrow?</Td>
            <Td>herrow?</Td>
            <Td>herrow?</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default DashboardTable;
