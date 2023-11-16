import { Heading, HStack } from "@chakra-ui/react";

import AddCabinModal from "../features/Cabins/AddCabinModal";
import { useGetCabins } from "../features/Cabins/useCabins";
import { useSearchParams } from "react-router-dom";
import CabinTable from "../features/Cabins/CabinTable";

function Cabins() {
  const { data, isLoading } = useGetCabins();
  const [searchParams] = useSearchParams();
  if (isLoading) return <div />;
  const sortDiscount = searchParams.get("discount");
  const sortedData = data.sort((a, b) => {
    if (!sortDiscount) return data;
    if (sortDiscount === "highest") {
      return a.discount > b.discount ? -1 : 1;
    } else return a.discount > b.discount ? 1 : -1;
  });

  return (
    <>
      <HStack justifyContent='space-between'>
        <Heading mb='32px'>All Cabins</Heading>
        <AddCabinModal />
      </HStack>
      <CabinTable data={sortedData} />
    </>
  );
}

export default Cabins;
