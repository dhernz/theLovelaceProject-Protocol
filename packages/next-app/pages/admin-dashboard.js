import React from "react";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    NumberInput,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    NumberInputField,
    Stack,
    Textarea,
    Text,
    Switch
} from '@chakra-ui/react';

  export default function Admin() {
    return (
    <div>
        <Stack
            bg={'gray.50'}
            rounded={'xl'}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: 'lg' }}>

            <Stack spacing={4}>
                <Heading
                color={'gray.800'}
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                Onboard Your DAO!
                </Heading>
                <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                </Text>
            </Stack>

            <Box as={'form'} mt={10}>
                <Stack spacing={4}>
                    <Button fontFamily={'heading'} bg={'gray.200'} color={'gray.800'}>
                        Upload CSV
                    </Button>
                </Stack>
            </Box>

            <FormControl isRequired>
                <FormLabel># of POAPs</FormLabel>
                    <NumberInput 
                        allowMouseWheel="true" 
                        max={110} min={1} 
                        defaultValue="1">
                        <NumberInputField onChange={(e) => setAge(e.target.value)}/>
                        <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
            </FormControl>

            <FormControl>
                <FormLabel>NFT Contract Address</FormLabel>
                    <Textarea
                        onChange={(e) => setMessage(e.target.value)}
                        optional
                        name="Message"
                        placeholder="0x..."
                        rows={1}
                        resize="none"
                    />
            </FormControl>

            <FormControl display='flex' alignItems='center'>
                <FormLabel htmlFor='email-alerts' mb='0'>
                    Require both?
                </FormLabel>
                <Switch size='md' id='email-alerts' />
            </FormControl>

            <Button
                colorScheme="blue"
                bg="blue.400"
                color="white"
                _hover={{
                bg: 'blue.500',
                }}
                onClick={(e)=> handleSubmit(e)}>
                Submit
            </Button>
        </Stack>
    </div>
    );
  }