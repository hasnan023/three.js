// components/HeaderWithFluidAnimation.js
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Box,
  Text,
  Flex,
  Image,
  Center,
  Grid,
  GridItem,
  Stack,
  Button,
  Divider,
  Tooltip,
} from "@chakra-ui/react";
import { ShaderMaterial, PlaneGeometry } from "three";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { ReactTyped } from "react-typed";
import "@fontsource/poppins"; // Defaults to weight 400

const HeaderAlt = () => {
  return (
    <>
      <Box position="relative" overflow="hidden">
        {/* <Box mt="130px">
        <Center>
          <ReactTyped
            strings={["Are you tired of boring designs?"]}
            typeSpeed={40}
            backSpeed={50}
            loop
            style={{
              fontSize: "30px", // Adjust the font size as needed
              fontWeight: "bold", // Adjust the font weight as needed
            }}
          />
        </Center>
      </Box> */}
        <Box position="relative" mt="100px">
          <Center>
            <Flex flexDirection="column">
              <Text
                fontWeight="bolder"
                fontFamily="Poppins"
                fontSize="80px"
                letterSpacing="0.4em"
              >
                DIGITAL
              </Text>
              <Text
                fontWeight="bolder"
                fontFamily="Poppins"
                letterSpacing="0.4em"
                fontSize="80px"
                mt="-55px"
              >
                BRIDGEE
              </Text>
            </Flex>
          </Center>
        </Box>
        <Grid
          mx="40px"
          p={7}
          position="relative"
          maxHeight="250px"
          templateRows="repeat(1, 1fr)" // 3 equal-sized rows
          templateColumns="repeat(4, 1fr)" // 3 equal-sized columns
          gap={4}
        >
          {/* This item will span 1 row and 2 columns */}
          <GridItem rowSpan={1} colSpan={3} bg="gray.200" borderRadius="30px">
            <Image
              src="/ImageAssets/1.webp"
              ml="70px"
              height="75%"
              width="80%"
            />
          </GridItem>

          {/* This item will span 2 rows and 1 column */}
          <GridItem
            rowSpan={1}
            colSpan={1}
            bg="gray.200"
            borderRadius="30px"
            p={4}
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Text as="h3">Welcome</Text>
              <Tooltip label="login for booking">
                <Button bg="gray.200">↷</Button>
              </Tooltip>
            </Box>
            <Text as="h5">This is Drip</Text>
          </GridItem>
        </Grid>
      </Box>
      <Box
        p={4}
        display="flex"
        flexDirection="row"
        justifyContent="space-evenly"
      >
        <Box display="flex" alignItems="center">
          <Text fontSize="3xl" fontWeight="bold" mr={4}>
            8+
          </Text>

          <Text fontSize="sm" color="gray">
            Years of <br />
            Experienced peoples
          </Text>
        </Box>

        <Box display="flex" alignItems="center">
          <Text fontSize="3xl" fontWeight="bold" mr={4}>
            10+
          </Text>

          <Text fontSize="sm" color="gray">
            Project Completer <br />
            within a year
          </Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Text fontSize="3xl" fontWeight="bold" mr={4}>
            100%
          </Text>

          <Text fontSize="sm" color="gray">
            Completion <br />
            within timeline
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default HeaderAlt;
