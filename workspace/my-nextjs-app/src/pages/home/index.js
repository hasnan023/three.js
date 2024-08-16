// pages/index.js
import React from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import Modal from '@/components/Modal/Modal';
import Cards from '@/components/Cards/Cards';
import { ChakraProvider, Flex, Box } from '@chakra-ui/react';
import ClientRibbon from '@/components/ClientRibbon/ClientRibbon';

const Index = () => {
  return (
    <ChakraProvider>
      <Sidebar/>
      <Cards/>
      <ClientRibbon/>
      </ChakraProvider>

   
  );
};

export default Index;
