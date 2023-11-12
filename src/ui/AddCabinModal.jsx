import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  Input,
  FormLabel,
  VStack,
  Box,
  Text,
  HStack,
  Textarea,
  Image,
  Center,
  useToast,
} from "@chakra-ui/react";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { createCabin } from "../services/apiCabins";

function AddCabinModal() {
  const [image, setImage] = useState(null);

  const inputFileRef = useRef(null);
  const formRef = useRef(null);
  const { register, handleSubmit, reset } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
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
    },
    onError: () =>
      toast({
        status: "error",
        title: "Could not create cabin.",
      }),
  });

  const onAddCabin = (data) => {
    console.log(data);
    // mutate(data);
    // onClose();
  };

  const allowedExtensions = ["jpg", "jpeg", "png"];
  // const handleUpload = (e) => {
  //   const file = e.target.files[0];
  //   const fileExtension = file.name.split(".").pop().toLowerCase();
  //   if (allowedExtensions.includes(fileExtension)) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setImage(e.target.result);
  //     };
  //     reader.readAsDataURL(file);
  //   } else {
  //     setImage(null);
  //   }
  // };

  return (
    <>
      <Button
        bgColor='var(--primary)'
        _hover={{
          bgColor: "var(--secondary)",
        }}
        color='white'
        onClick={onOpen}
      >
        Add new
      </Button>
      <Modal size='2xl' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color='var(--secondary)'>New Cabin</ModalHeader>
          <ModalCloseButton
            _hover={{
              color: "red.500",
            }}
          />
          <ModalBody pb='40px'>
            <VStack
              as='form'
              align='normal'
              gap='32px'
              // onSubmit={}
              onSubmit={handleSubmit(onAddCabin)}
              ref={formRef}
            >
              <HStack>
                <FormControl variant='floating' id='first-name' isRequired>
                  <Input {...register("name")} placeholder=' ' />
                  <FormLabel>Cabin name</FormLabel>
                </FormControl>
                <FormControl variant='floating' id='capacity' isRequired>
                  <Input
                    {...register("maxCapacity", { valueAsNumber: true })}
                    type='number'
                    placeholder=' '
                  />
                  <FormLabel>Capacity</FormLabel>
                </FormControl>
              </HStack>
              <HStack>
                <FormControl variant='floating' id='price' isRequired>
                  <Input
                    {...register("regularPrice", { valueAsNumber: true })}
                    type='number'
                    placeholder=' '
                  />
                  <FormLabel>Regular price</FormLabel>
                </FormControl>
                <FormControl variant='floating' id='discount'>
                  <Input
                    {...register("discount", { valueAsNumber: true })}
                    type='number'
                    placeholder=' '
                  />
                  <FormLabel>Discount {"($ OFF)"} </FormLabel>
                </FormControl>
              </HStack>
              <FormControl variant='floating' id='description'>
                <Input
                  {...register("description")}
                  placeholder=' '
                  as={Textarea}
                />
                <FormLabel>Description</FormLabel>
              </FormControl>
              <Box
                cursor='pointer'
                borderRadius='10px'
                pos='relative'
                w='fit-content'
                mx='auto'
              >
                <Input
                  zIndex={2}
                  opacity={0}
                  {...register("image")}
                  type='file'
                  // cursor='pointer'

                  w='240px'
                />
                <Button
                  variant='unstyled'
                  w='100%'
                  pos='absolute'
                  top='0'
                  left='0'
                  cursor='default'
                >
                  <Box mr='6px' as='span' color='var(--secondary)'>
                    Click here
                  </Box>
                  to add image
                </Button>
                {/* <Image src={imageRef.current} /> */}
              </Box>

              <Button
                color='white'
                _hover={{
                  bgColor: "var(--secondary)",
                }}
                bgColor='var(--primary)'
                mt='32px'
                type='submit'
                isLoading={isLoading}
              >
                Add Cabin
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddCabinModal;
