import { Box, Grid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
function Layout() {
  return (
    <Grid gridTemplateColumns='320px 1fr' gridTemplateRows='auto 1fr' h='100vh'>
      <Header />
      <Sidebar />
      <Box
        w='100%'
        // px={{ base: "0px", sm: "16px" }}
        bgColor='gray.100'
        p='32px 80px'
        mx='auto'
        py='72px'
      >
        <Outlet />
      </Box>
    </Grid>
  );
}

export default Layout;
