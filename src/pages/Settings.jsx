import {
  Box,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Grid,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { getSettings } from "../services/apiSettings";
function Settings() {
  const { data, isLoading } = useQuery("settings", getSettings);

  if (isLoading) return <div />;

  return (
    <Box>
      <Heading>Update hotel settings</Heading>

      <Grid
        as='form'
        bgColor='white'
        py='40px'
        px='80px'
        borderRadius='10px'
        mt='32px'
        align='normal'
        gridTemplateColumns='1fr 1fr'
        rowGap='24px'
        columnGap='16px'
      >
        <FormControl>
          <FormLabel>Minimum nights/booking</FormLabel>
          <Input type='number' placeholder={data[0].minBooking} />
        </FormControl>
        <FormControl>
          <FormLabel>Maximum nights/booking</FormLabel>
          <Input type='number' placeholder={data[0].maxBooking} />
        </FormControl>
        <FormControl>
          <FormLabel>Maximum guests/booking</FormLabel>
          <Input type='number' placeholder={data[0].maxGuestsPerBooking} />
        </FormControl>
        <FormControl>
          <FormLabel>Breakfast price ($)</FormLabel>
          <Input type='number' placeholder={data[0].breakfastPrice} />
        </FormControl>
      </Grid>
    </Box>
  );
}

export default Settings;
