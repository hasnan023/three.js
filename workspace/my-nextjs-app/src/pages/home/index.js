// pages/index.js
import React from "react";
import Sidebar from "@/components/HomeComp/Sidebar/Sidebar";
import Modal from "@/components/Modal/Modal";
import Header from "@/components/HomeComp/Header/Header";
import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
import ClientRibbon from "@/components/HomeComp/ClientRibbon/ClientRibbon";
import Services from "@/components/HomeComp/Services/Services";
import Gallery from "@/components/HomeComp/Gallery/Gallery";
import Testimonials from "@/components/HomeComp/Testimonials/Testimonials";
import Footer from "@/components/HomeComp/Footer/Footer";
import Projects from "@/components/HomeComp/Projects/Projects";

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
