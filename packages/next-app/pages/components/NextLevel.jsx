import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  
  export default function Pricing() {
    return (
      <Center py={6}>
        <Box
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Stack
            textAlign={'center'}
            p={5}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}>
            <Text
              fontSize={'sm'}
              fontWeight={500}
              bg={useColorModeValue('blue.100', 'blue.900')}
              p={2}
              px={5}
              color={'blue.500'}
              rounded={'full'}>
              Level Up
            </Text>
          </Stack>
          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
            <List spacing={5}>
              <ListItem>
                <ListIcon as={CheckIcon} color="blue.400" />
                Attend Events
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="blue.400" />
                Host Events
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="blue.400" />
                Contribute
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="blue.400" />
                Participate
              </ListItem>
            </List>
  
            <Button
              mt={10}
              w={'full'}
              bg={'blue.400'}
              color={'white'}
              rounded={'xl'}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Check Progress
            </Button>
          </Box>
        </Box>
      </Center>
    );
  }