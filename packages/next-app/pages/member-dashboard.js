import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
import NextLevel from './components/NextLevel';

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
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          Member Dashboard
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 1, lg: 2 }}>
          <StatsCard title={'Level'} stat={'1'} />
          <StatsCard title={'DAO'} stat={'H.E.R. DAO LATAM'} />
          <StatsCard title={'POAPs Collected'} stat={'40'} />
          <StatsCard title={'NFTs Collected'} stat={'2'} />
          <StatsCard title={'Kudos Collected'} stat={'5'} />
        </SimpleGrid>
        <NextLevel></NextLevel>
      </Box>
    );
  }