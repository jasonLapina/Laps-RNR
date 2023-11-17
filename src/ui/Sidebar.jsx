import { Box, HStack, Icon, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { AiFillHome, AiTwotoneCalendar, AiFillSetting } from "react-icons/ai";
import { HiHomeModern } from "react-icons/hi2";
import Uploader from "../data/Uploader";
function Sidebar() {
  const navs = [
    {
      text: "home",
      to: "/",
      icon: AiFillHome,
    },
    {
      text: "bookings",
      to: "/bookings",
      icon: AiTwotoneCalendar,
    },
    {
      text: "cabins",
      to: "/cabins",
      icon: HiHomeModern,
    },
    {
      text: "settings",
      to: "/settings",
      icon: AiFillSetting,
    },
  ];

  const activeNav = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "var(--secondary)" : "",
    };
  };

  return (
    <Box borderRight='solid 1px #d1d1d1' px='16px' py='40px' gridRow='1/-1'>
      <VStack gap='32px'>
        <Box mb='32px'>Logo</Box>
        {navs.map((n) => (
          <HStack
            borderRadius='10px'
            alignSelf='start'
            fontSize='20px'
            as={NavLink}
            style={activeNav}
            to={n.to}
            key={n.text}
            py='16px'
            w='100%'
            pos='relative'
            role='group'
          >
            <Box
              pos='absolute'
              w='100%'
              borderRadius='10px'
              h='100%'
              bgColor='var(--secondary)'
              opacity={0.2}
              transform='scaleX(0)'
              transition='all .3s'
              transformOrigin='left'
              _groupHover={{
                transform: "scaleX(1)",
              }}
            />
            <Icon transition='all .3s' ml='8px' display='span' as={n.icon} />
            <Box>{n.text}</Box>
          </HStack>
        ))}
        <Uploader />
      </VStack>
    </Box>
  );
}

export default Sidebar;
