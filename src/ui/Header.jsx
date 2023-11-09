import { Box } from "@chakra-ui/react";
function Header() {
  return (
    <Box borderBottom='solid 1px #d1d1d1' py='24px'>
      <Box maxW='1440px' px={{ base: "0px", sm: "16px" }} mx='auto'>
        header
      </Box>
    </Box>
  );
}

export default Header;
