import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
    Center,
    Button
  } from '@chakra-ui/react';
import NextLevel from './components/NextLevel';
import Filter from './components/Filter';
import { IpfsImage } from 'react-ipfs-image';


function StatsCard(props) {
    const { title, stat } = props;
    return (
      <Stat
        px={{ base: 4, md: 8 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <StatLabel fontWeight={'medium'} isTruncated>
          {title}
        </StatLabel>
        <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
          {stat}
        </StatNumber>
      </Stat>
    );
  }
  
  export default function BasicStatistics() {
    return (
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
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
              View Messages
            </Button>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          Member Dashboard
        </chakra.h1>

        <Center py={6}>
        <IpfsImage width={"300px"} hash='QmWVa8hpVSj6QR34Vb9sgLcSw33pPhVFq88uR4gA2uQP25' gatewayUrl='https://gateway.pinata.cloud/ipfs/'/> 
        </Center>  
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 1, lg: 2 }}>
      {/* you can pass in a gateway URL of your choice. the default gateway url is `https://ipfs.infura.io/ipfs` */}
          <StatsCard title={'DAO'} stat={'H.E.R. DAO LATAM'} />
          <StatsCard title={'POAPs Collected'} stat={'40'} />
          <StatsCard title={'NFTs Collected'} stat={'2'} />
          <StatsCard title={'Kudos Collected'} stat={'5'} />
        </SimpleGrid>
        <NextLevel></NextLevel>
      </Box>
    );
  }