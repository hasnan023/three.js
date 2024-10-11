// pages/index.js
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "@/components/HomeComp/Sidebar/Sidebar";
import Modal from "@/components/Modal/Modal";
import Header from "@/components/HomeComp/Header/Header";
import { ChakraProvider, Center, Spinner, Flex, Box } from "@chakra-ui/react";
import ClientRibbon from "@/components/HomeComp/ClientRibbon/ClientRibbon";
import Services from "@/components/HomeComp/Services/Services";
import Gallery from "@/components/HomeComp/Gallery/Gallery";
import Testimonials from "@/components/HomeComp/Testimonials/Testimonials";
import Footer from "@/components/HomeComp/Footer/Footer";
import Projects from "@/components/HomeComp/Projects/Projects";
import { PacmanLoader, ClimbingBoxLoader } from "react-spinners";
import HeaderAlt from "@/components/HomeComp/HeaderAlt/HeaderAlt";
import HeaderAlternative from "@/components/HomeComp/HeaderAlternative/HeaderAlternative";
import ProjectsAlt from "@/components/HomeComp/Projects/ProjectsAlt";
// import { LoadingProvider } from "../../components/context/LoadingContext";
// import { useLoading } from "../../components/context/LoadingContext";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout as needed

    // Clear the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  // Show spinner while loading
  if (isLoading) {
    return (
      <Center height="100vh">
        <ClimbingBoxLoader color="gray" />
      </Center>
    );
  }
  return (
    <ChakraProvider>
      <Sidebar />
      <HeaderAlternative />
      {/* <HeaderAlt /> */}
      {/* <Header /> */}
      <ClientRibbon />
      {/* <Gallery /> */}
      <Services />
      <ProjectsAlt />
      {/* <Projects /> */}
      <Testimonials />
      <Footer />
    </ChakraProvider>
  );
};

export default Index;
