import { Text } from "@chakra-ui/react";
function EmptyData({ dataName }) {
  return (
    <Text my='40px' textAlign='center' fontSize='24px' fontWeight='semibold'>
      No {dataName} could be found.
    </Text>
  );
}
export default EmptyData;
