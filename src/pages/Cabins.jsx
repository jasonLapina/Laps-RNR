import {
  Box,
  Heading,
  Table,
  Thead,
  Tr,
  Th,
  TableContainer,
  Tbody,
  Td,
  Image,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  const { data, isLoading } = useQuery("cabins", getCabins);

  if (isLoading) return <div />;

  console.log(data);

  return (
    <Box>
      <Heading mb='32px'>All Cabins</Heading>
      <TableContainer>
        <Table variant='simple' role='table'>
          <Thead bgColor='var(--secondary)' role='row'>
            <Tr>
              <Th></Th>
              <Th>Cabin</Th>
              <Th>Capacity</Th>
              <Th>Price</Th>
              <Th>Discount</Th>
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
                  {item.discount ? `$${item.discount}` : ""}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Cabins;
