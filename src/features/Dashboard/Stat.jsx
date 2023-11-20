import { Box, HStack, Icon, Text } from "@chakra-ui/react";
function Stat({ icon, title, value, color }) {
  return (
    <HStack gap='16px' px='16px' py='32px' borderRadius='10px'>
      <Icon
        borderRadius='full'
        bgColor='gray.100'
        fontSize='80px'
        p='16px'
        color={color}
        as={icon}
      />
      <Box>
        <Text fontWeight='semibold'>{title}</Text>
        <Text fontWeight='bold' fontSize='20px'>
          {value}
        </Text>
      </Box>
    </HStack>
  );
}

export default Stat;
