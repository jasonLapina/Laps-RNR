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
  ModalFooter,
  Image,
  Center,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

function AddCabinModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [image, setImage] = useState(null);
  const inputFileRef = useRef(null);
  const allowedExtensions = ["jpg", "jpeg", "png"];
  const handleUpload = (e) => {
    const file = e.target.files[0];
    const fileExtension = file.name.split(".").pop().toLowerCase();
    if (allowedExtensions.includes(fileExtension)) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  const { register, handleSubmit } = useForm();

  // const onAddCabin = (data) => console.log(data);

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
            >
              <HStack>
                <FormControl variant='floating' id='first-name' isRequired>
                  <Input {...register("name")} placeholder=' ' />
                  <FormLabel>Cabin name</FormLabel>
                </FormControl>
                <FormControl variant='floating' id='capacity' isRequired>
                  <Input type='number' placeholder=' ' />
                  <FormLabel>Capacity</FormLabel>
                </FormControl>
              </HStack>
              <HStack>
                <FormControl variant='floating' id='price' isRequired>
                  <Input type='number' placeholder=' ' />
                  <FormLabel>Regular price</FormLabel>
                </FormControl>
                <FormControl variant='floating' id='discount' isRequired>
                  <Input type='number' placeholder=' ' />
                  <FormLabel>Discount</FormLabel>
                </FormControl>
              </HStack>
              <FormControl variant='floating' id='description' isRequired>
                <Input placeholder=' ' as={Textarea} />
                <FormLabel>Description</FormLabel>
              </FormControl>
              <FormControl
                textAlign='center'
                bgColor='whiteAlpha.100'
                borderRadius='20px'
                pos='relative'
              >
                <Input
                  type='file'
                  onChange={handleUpload}
                  cursor='pointer'
                  display='none'
                  ref={inputFileRef}
                />

                <Text
                  pos='absolute'
                  left='50%'
                  transform='translate(-50%)'
                  cursor='pointer'
                  top='0'
                  onClick={() => inputFileRef.current.click()}
                >
                  <Box as='span' color='var(--secondary)'>
                    Click here{" "}
                  </Box>
                  to add image
                </Text>
                {image && (
                  <Center mt='16px'>
                    <Image maxW='320px' bgColor='red' src={image} />
                  </Center>
                )}
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              color='white'
              _hover={{
                bgColor: "var(--secondary)",
              }}
              bgColor='var(--primary)'
            >
              Add Cabin
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddCabinModal;
