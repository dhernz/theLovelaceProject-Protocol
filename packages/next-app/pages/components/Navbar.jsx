import { React } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  Center,
  Image
} from '@chakra-ui/react';
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Nav() {

  return (
    <>
      <Box bg={useColorModeValue('blue.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
          <Image
            alt="lovelaceicon"
            w={"90px"}
            h={"90px"}
            src={'./lovelaceicon.png'}/>
          </Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <ConnectButton></ConnectButton>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}