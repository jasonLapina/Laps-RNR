import { useQuery, useQueryClient, useMutation } from "react-query";
import { getCabins, createCabin } from "../../services/apiCabins";
import { useToast } from "@chakra-ui/react";

export function useGetCabins() {
  const { data, isLoading } = useQuery("cabins", getCabins);

  return { data, isLoading };
}

export function useCreateCabin(reset, onClose) {
  const toast = useToast();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast({
        status: "success",
        title: "Cabin created",
      });
      queryClient.invalidateQueries("cabins");
      reset();
      onClose();
    },
    onError: () =>
      toast({
        status: "error",
        title: "Could not create cabin.",
      }),
  });

  return { mutate, isLoading };
}
