import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  VStack,
  Text,
  HStack,
  Divider,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { AiOutlineMore } from "react-icons/ai";
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
              <Td>{item.cabins.name}</Td>
              <Td>
                <VStack alignItems='start'>
                  <Text>{item.guests.name}</Text>
                  <Text fontSize='14px' opacity={0.7}>
                    {item.guests.email}
                  </Text>
                </VStack>
              </Td>
              <Td>
                <VStack alignItems='start'>
                  <Text>
                    From:{" "}
                    {new Date(item.startDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    })}
                  </Text>
                  <Text fontSize='14px' opacity={0.7}>
                    To:{" "}
                    {new Date(item.endDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    })}
                  </Text>
                </VStack>
              </Td>
              <Td>{item.status}</Td>
              <Td color={item.isPaid ? "green.500" : "red.500"}>
                <HStack>
                  <Text>${item.totalPrice}</Text>
                  <Divider orientation='vertical' />
                  <Text>{item.isPaid ? "Paid" : "Unpaid"}</Text>
                </HStack>
              </Td>
              <Td>
                <Menu>
                  <MenuButton>
                    <Icon cursor='pointer' as={AiOutlineMore} />
                  </MenuButton>
                  <MenuList>
                    <VStack gap='16px'>
                      <MenuItem>Details</MenuItem>
                      <MenuItem>Check in</MenuItem>
                      <MenuItem>Check out</MenuItem>
                    </VStack>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default BookingsTable;
