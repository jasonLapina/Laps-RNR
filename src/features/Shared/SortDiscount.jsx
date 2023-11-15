import { Box } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
function SortDiscount() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <Box
      _hover={{
        color: "var(--accent)",
      }}
      transition='all .3s'
      cursor='pointer'
      onClick={() => {
        searchParams.set(
          "discount",
          !searchParams.get("discount")
            ? "highest"
            : searchParams.get("discount") === "highest"
            ? "lowest"
            : "highest"
        );
        setSearchParams(searchParams);
      }}
    >
      Discount
    </Box>
  );
}

export default SortDiscount;
