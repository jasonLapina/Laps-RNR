import {
  Box,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Grid,
  useToast,
} from "@chakra-ui/react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getSettings, updateSetting } from "../services/apiSettings";
function Settings() {
  const { data, isLoading } = useQuery("settings", getSettings);
  const toast = useToast();

  const queryClient = useQueryClient();

  const { mutate, isLoading: isUpdating } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast({ status: "success", title: "Settings updated" });
      queryClient.invalidateQueries("settings");
    },
    onError: () =>
      toast({ status: "error", title: "Settings could not be updated" }),
  });

  if (isLoading) return <div />;

  const handleUpdate = (e, field) => {
    const { value } = e.target;

    if (!value) return;
    mutate({ [field]: value });
  };

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
          <Input
            disabled={isUpdating}
            onBlur={(e) => handleUpdate(e, "minBooking")}
            type='number'
            defaultValue={data[0].minBooking}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Maximum nights/booking</FormLabel>
          <Input
            disabled={isUpdating}
            onBlur={(e) => handleUpdate(e, "maxBooking")}
            type='number'
            defaultValue={data[0].maxBooking}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Maximum guests/booking</FormLabel>
          <Input
            disabled={isUpdating}
            onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
            type='number'
            defaultValue={data[0].maxGuestsPerBooking}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Breakfast price ($)</FormLabel>
          <Input
            disabled={isUpdating}
            onBlur={(e) => handleUpdate(e, "breakfastPrice")}
            type='number'
            defaultValue={data[0].breakfastPrice}
          />
        </FormControl>
      </Grid>
    </Box>
  );
}

export default Settings;
