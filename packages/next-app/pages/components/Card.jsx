import React, { useState, useEffect } from "react";
import {
    Heading,
    Avatar,
    Box,
    Center,
    Accordion,
    AccordionItem,
    AccordionIcon,
    AccordionPanel,
    AccordionButton,
    Button,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react';
import CardText from "./CardText.jsx";
import { useContract, useSigner } from 'wagmi';
import { contractAddress } from '../../utils/contractAddress.js';
import contractABI from '../../contracts/ABI/LovelaceNFT.json';


export default function Card({ greetingID, ownerAddress, name }) {
    // Chakura-UI Toast Messages
    const toast = useToast();
    // Transaction States
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(null);

    // Connect To Contract
    const signer = useSigner();
    const contractOnMumbai = useContract({
        addressOrName: contractAddress,
        contractInterface: contractABI,
        signerOrProvider: signer.data,
    });

    // Toasts for Transaction States
    useEffect(() => {
        if(success) {
            toast({
                title: "Success!",
                status: "success",
                duration: 4000,
                isClosable: false,
                position: "bottom-right",
            });
        }
        if(loading) {
            toast({
                title: "Waiting...",
                status: "loading",
                duration: 4000,
                isClosable: false,
                position: "bottom-right",
            });
        }
    }, [success, loading]);

    // Send Greeting
    const sendGreeting = async (cid) => {
        try {
            setSuccess(false)
            setLoading(false)
            if (contractOnMumbai) {
            const txn = await contractOnMumbai.sendGreeting(greetingID,{ gasLimit: 900000 });
            setLoading(true);
            await txn.wait();
            setLoading(false);
            setSuccess(true);
            } else {
            setSuccess(false)
            setLoading(false)
            alert("Oops! Something went wrong. Please refresh & try again.");
            }
        } catch (error) {
            setSuccess(false)
            setLoading(false)
            alert("Oops! Something went wrong. Please refresh & try again.");
        }
    };

    return (
      <Center py={6} px={3}>
        <Box
          maxW={'300px'}
          w={'full'}
          bg={useColorModeValue('purple.100', 'purple.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
            <Avatar
                size={'xl'}
                src={"https://gateway.pinata.cloud/ipfs/QmWVa8hpVSj6QR34Vb9sgLcSw33pPhVFq88uR4gA2uQP25"}
                alt={'Avatar Alt'}
                mb={4}
                pos={'relative'}
            />
            <Heading fontSize={'2xl'} fontFamily={'body'}> {name} </Heading>
            <Accordion allowToggle>
                <AccordionItem>
                    <AccordionButton _expanded={{ bg: 'purple.200', color: 'purple.500'}}>
                        <Box fontWeight={700} color={'purple.500'} flex='1' textAlign='center'> 
                            Member Info
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <CardText boldText={"Member ID:"} text={"disfhiw843"}/>
                        <CardText boldText={"Address:"} text={ownerAddress}/>
                        <CardText boldText={"Name:"} text={name}/>
                        <CardText boldText={"DAO:"} text={"H.E.R. DAO LATAM"}/>
                        <CardText boldText={"Area:"} text={"Developer"}/>
                        <CardText boldText={"Type:"} text={"Governor"}/>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <CardText boldText={"Level:"} text={"1"}/>
            <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                colorScheme="blue"
                bg="purple.400"
                color="white"
                _hover={{ bg: 'blue.500' }}
                onClick={(e)=> sendGreeting(e)}>
                Send Notification
            </Button>
        </Box>
      </Center>
    );
}