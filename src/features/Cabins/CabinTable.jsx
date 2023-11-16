import {
  Table,
  Thead,
  Tr,
  Th,
  TableContainer,
  Tbody,
  Td,
  Image,
  Text,
  Button,
  HStack,
  Divider,
} from "@chakra-ui/react";

import SortDiscount from "../Shared/SortDiscount";
/* eslint-disable react/prop-types */
function CabinTable({ data }) {
  return (
    <TableContainer>
      <Table variant='simple' role='table'>
        <Thead bgColor='var(--secondary)' role='row'>
          <Tr>
            <Th></Th>
            <Th>Cabin</Th>
            <Th>Capacity</Th>
            <Th>Price</Th>
            <Th>
              <SortDiscount />
            </Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item.id}>
              <Td pl='0px' maxW='80px'>
                <Image
                  bgColor='blue'
                  borderRadius='10px'
                  w='100%'
                  src={item.image}
                  alt={item.name + "cabin"}
                />
              </Td>
              <Td>
                <Text fontSize='20px' color='var(--accent)'>
                  {item.name.slice(0, 1).toUpperCase() + item.name.slice(1)}
                </Text>
              </Td>
              <Td>{item.maxCapacity}</Td>
              <Td>${Number(item.regularPrice).toFixed(2)}</Td>
              <Td color='green.500' fontWeight='bold'>
                {item.discount ? `$${item.discount}` : "--"}
              </Td>
              <Td maxW='80px'>
                <HStack gap='16px'>
                  <Button
                    _hover={{
                      color: "var(--secondary)",
                    }}
                  >
                    Edit
                  </Button>
                  <Divider bgColor='gray' h='10px' w='2px' />
                  <Button
                    _hover={{
                      color: "red.700",
                    }}
                    color='red.500'
                  >
                    Delete
                  </Button>
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default CabinTable;
