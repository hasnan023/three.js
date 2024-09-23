// components/HeaderWithFluidAnimation.js
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Box,
  Text,
  Flex,
  Image,
  Center,
  Stack,
  Button,
} from "@chakra-ui/react";
import { ShaderMaterial, PlaneGeometry } from "three";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { ReactTyped } from "react-typed";

// Fluid-like effect shaders
// const fragmentShader = `
//   varying vec2 vUv;
//   uniform float time;

//   void main() {
//     vec2 position = -1.0 + 2.0 * vUv;
//     float red = abs(sin(position.x * position.y + time / 5.0));
//     float green = abs(sin(position.x * position.y + time / 4.0));
//     float blue = abs(sin(position.x * position.y + time / 3.0));
//     gl_FragColor = vec4(red, green, blue, 1.0);
//   }
// `;
const fragmentShader = `
varying vec2 vUv;
uniform float time;

void main() {
  vec2 position = -1.0 + 2.0 * vUv;
  float gray = abs(sin(position.x * position.y + time / 5.0));
  float maxGray = 0.8; // Limit the maximum value to avoid full white
  gray = min(gray, maxGray);
  gl_FragColor = vec4(gray, gray, gray, 1.0);
}
`;

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const FluidShader = () => {
  const materialRef = useRef();

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh>
      <planeGeometry args={[19, 12]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={{ time: { value: 1.0 } }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};

const Model = ({ url }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={8} position={[-3, 1, 0]} />;
};

const HeaderWithFluidAnimation = () => {
  return (
    <Box position="relative" width="100%" height="85vh" overflow="hidden">
      <Canvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        <FluidShader />
      </Canvas>
      <Box
        position="relative"
        zIndex={1}
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          width="100%"
          maxWidth="100%"
          justify="space-between"
          align="center"
          direction={{ base: "column", md: "row" }} // Responsive direction
          textAlign={{ base: "center", md: "left" }} // Center text on small screens
          p={{ base: 4, md: 8 }} // Add padding for smaller screens
        >
          {/* Left box for 3D object */}
          <Box
            flex="1"
            width="100%"
            height="100%"
            position="relative"
            mb={{ base: 4, md: 0 }}
          >
            {/* <Canvas
            style={{
              width: "100%",
              height: "230px",
            }}
            camera={{ position: [5, 5, 5], fov: 50 }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Model url="/geometry2.glb" />
            <OrbitControls enableZoom={true} />
          </Canvas> */}
          </Box>

          {/* Center box with text and buttons */}
          <Box flex="3" alignItems="center" textAlign="center">
            <Center>
              <ReactTyped
                strings={["Are you tired of boring designs?"]}
                typeSpeed={40}
                backSpeed={50}
                loop
                style={{
                  fontSize: "30px", // Adjust the font size as needed
                  fontWeight: "bold", // Adjust the font weight as needed
                  color: "Black", // Ensure the text color is visible against your background
                }}
              />
            </Center>
            <Center>
              <Text fontSize="20px">Then just scroll and have a look</Text>
            </Center>
            <Stack
              direction="row"
              mt={4}
              spacing={4}
              alignItems="center"
              justifyContent="center"
            >
              <Button colorScheme="teal" variant="solid">
                Get Consultancy
              </Button>
              <Button colorScheme="teal" variant="outline">
                Visit
              </Button>
            </Stack>
          </Box>

          {/* Right box (can be hidden or adjusted as needed) */}
          <Box
            flex="1"
            mt={{ base: "20px", md: "250px" }}
            ml={{ base: "0", md: "120px" }}
          ></Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default HeaderWithFluidAnimation;
