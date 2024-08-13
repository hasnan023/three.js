// pages/index.js
import React from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import Modal from '@/components/Modal/Modal';
import Cards from '@/components/Cards/Cards';
import { ChakraProvider, Flex, Box } from '@chakra-ui/react';

const Index = () => {
  return (
    <ChakraProvider>
      <Sidebar/>
      <Modal/>
      <Cards/>

    </ChakraProvider>
  );
};

export default Index;
