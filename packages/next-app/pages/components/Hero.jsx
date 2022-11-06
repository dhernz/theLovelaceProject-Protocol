import React from "react";
import { 
  Heading,
  Text, 
  Flex,
  Box,
  Stack,
  useMediaQuery
} from "@chakra-ui/react";
import AdminButton from "./AdminButton";
import MemberButton from "./MemberButton";
import WorldCoin from './WorldCoin';

function Hero() {
  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
  return (
    <div>
      <Flex
        alignItems="center"
        w="full"
        px={isLargerThanLG ? '19' : '8'}
        py="10"
        minHeight="20vh"
        flexDirection={isLargerThanLG ? 'row' : 'column'}>
        <Box mr={isLargerThanLG ? '6' : '0'} w={isLargerThanLG ? '60%' : 'full'}>
          <Flex
            w={isLargerThanLG ? '60%' : '100%'}
            alignItems="left"
            justifyContent="left">
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}>
              The <br/>
              <Text as={'span'} color={'blue.400'}>
                Lovelace <br/>
              </Text>
              Project <br/>
            </Heading>
          </Flex>
          <Text mb="5" fontSize={isLargerThanLG ? 'lg' : 'base'} opacity={0.7}>
            add text here
          </Text>
          <Stack direction='row' spacing={1}>
            <AdminButton></AdminButton>
            <MemberButton></MemberButton>
          </Stack>
          <Stack direction='col' marginTop={5}>
            <WorldCoin></WorldCoin>
          </Stack>
        </Box>
      </Flex>
    </div>
  );
}

export default Hero;
