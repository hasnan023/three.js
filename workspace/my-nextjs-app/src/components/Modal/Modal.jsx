// pages/index.js
import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls , Bounds} from '@react-three/drei';
import { sRGBEncoding } from 'three';

// Three.js Model Component
const Model = ({ src }) => {
  const { scene } = useGLTF(src);
  
  console.log(scene)
  
  return <primitive object={scene} />;
};

// CameraControls Component for interactive camera control
const CameraControls = () => {
  const { camera, gl } = useThree();


  return <OrbitControls 
  maxPolarAngle={Math.PI / 2} // Limit vertical rotation (up-down)
      minPolarAngle={Math.PI / 2} // Prevent up-down rotation
  />;
};

// Main Component
const Index = () => {
  // Path to your GLB model
  const modelSrc = '/store.glb';

  return (
    <ChakraProvider>
      <Box
        
        
        width="98.5vw" // Full viewport width
        height="85vh" // Full viewport height
        overflow="hidden" // Prevent scrollbars
      >
        {/* Canvas for Three.js Model */}
        <Canvas
          camera={{ position: [0, 0, 95], fov: 25 }}
          style={{ width: '100%', height: '100%' }} // Make canvas fit the container
          gl={{ outputEncoding: sRGBEncoding }} // Ensure correct color encoding
          onCreated={({ camera }) => {
            camera.lookAt(0, 0, 0); // Point the camera to the center of the scene
          }}
          
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[20, 20, 10]} intensity={0.9} />
          <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={0.7} />
          <Bounds fit clip observe margin={1}>
            <Model src={modelSrc} />
          </Bounds>
          <Model src={modelSrc} />
          <CameraControls /> {/* Add the camera controls here */}
        </Canvas>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
