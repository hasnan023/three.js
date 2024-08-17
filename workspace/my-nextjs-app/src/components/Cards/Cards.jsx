// components/HeaderWithFluidAnimation.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box ,Text, Flex, Image} from '@chakra-ui/react';
import { ShaderMaterial, PlaneGeometry } from 'three';
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

const HeaderWithFluidAnimation = () => {
  return (
    <Box position="relative" width="100%" height="60vh" overflow="hidden">
      <Canvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
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
        padding="0 2rem"
      >
        <Flex
          width="100%"
          maxWidth="1200px" // Adjust as needed
          justify="space-between"
          align="center"
          direction={{ base: 'column', md: 'row' }} // Stack vertically on small screens
        >
          {/* Left box for text */}
          <Box flex="1" padding="1rem">
          <ReactTyped strings={["Are u tired of themes too??","Then wait and Scroll Boys.."]} typeSpeed={40} backSpeed={50} loop 
          style={{
            fontSize: "40px",  // Adjust the font size as needed
            fontWeight: 'bold',  // Adjust the font weight as needed
            color: 'Black',  // Ensure the text color is visible against your background
          }}

          />
          </Box>
          {/* Right box for image */}
          <Box flex="1" padding="1rem">
            <Image 
              src="/image2.png" 
              alt="Descriptive text" 
              objectFit="cover" 
              width="100%" 
              height="auto" 
              borderRadius="md" 
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default HeaderWithFluidAnimation;
