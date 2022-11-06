import React from "react";
import {
  Stack,
  Button,
  useMediaQuery
} from '@chakra-ui/react';
import { useAccount } from 'wagmi';

export default function Choose() {
  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
  return (
    <>              
      <Button
        colorScheme={'blue'}
        bg={'blue.300'} 
        mr={3}
        _hover={{
            bg: 'blue.500'}}
        onClick={(e) => {
            e.preventDefault();
            window.location.href='/member-dashboard';
        }}>
          Member
      </Button> 
    </>
  );
}
