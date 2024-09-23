// pages/index.js
import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Modal from "@/components/Modal/Modal";
import Header from "@/components/Header/Header";
import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
import ClientRibbon from "@/components/ClientRibbon/ClientRibbon";
import Services from "@/components/Services/Services";
import Gallery from "@/components/Gallery/Gallery";
import Testimonials from "@/components/Testimonials/Testimonials";
import Footer from "@/components/Footer/Footer";
import Projects from "@/components/Projects/Projects";

const Index = () => {
  return (
    <ChakraProvider>
      <Sidebar />
      <Header />
      <ClientRibbon />
      <Gallery />
      <Services />
      <Projects />
      <Testimonials />
      <Footer />
    </ChakraProvider>
  );
};

export default Index;
