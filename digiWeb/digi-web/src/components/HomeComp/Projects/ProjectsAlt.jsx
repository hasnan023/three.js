import React, { useRef } from "react";
import { Box, HStack, Circle, Text, Icon } from "@chakra-ui/react";
import { AiOutlineReload } from "react-icons/ai";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaSearch,
} from "react-icons/fa";

const videoData = [
  {
    title: "Video 1",
    src: "/p1/v1.mp4",
  },
  {
    title: "Video 2",
    src: "/p1/v1.mp4",
  },
  {
    title: "Video 3",
    src: "/p1/v1.mp4",
  },
];

const ProjectsAlt = () => {
  return (
    <Box mx="20%" display="flex" flexDirection="column" gap="50px">
      {videoData.map((video, index) => (
        <VideoBox key={index} title={video.title} src={video.src} />
      ))}
    </Box>
  );
};

const VideoBox = ({ title, src }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset video to the beginning
      videoRef.current.pause(); // Pause so it doesn't play continuously
    }
  };

  return (
    <Box
      border="1px solid"
      borderColor="gray.300"
      height="350px"
      borderRadius="md"
      bg="gray.100"
    >
      {/* Toolbar Section */}
      <Box
        bg="gray.200"
        p={2}
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="gray.300"
        height="30px"
      >
        {/* macOS-style window control buttons */}
        <HStack spacing={2} ml={2}>
          <Circle size="12px" bg="red.500" />
          <Circle size="12px" bg="yellow.500" />
          <Circle size="12px" bg="green.500" />
        </HStack>

        {/* macOS-like Toolbar */}
        <HStack spacing={4} ml={6} alignItems="center">
          <Icon as={FaChevronLeft} boxSize={4} cursor="pointer" />
          <Icon as={FaChevronRight} boxSize={4} cursor="pointer" />
          <Icon as={AiOutlineReload} boxSize={5} cursor="pointer" />
          <Icon as={FaStar} boxSize={4} cursor="pointer" />
        </HStack>

        {/* Title Bar */}
        <Box
          mx={10}
          mt={2}
          flex="1"
          borderRadius="md"
          px={6}
          py={2}
          display="flex"
          alignItems="center"
        >
          <Text color="gray.700" fontSize="sm">
            {title}
          </Text>
        </Box>

        {/* Search Icon */}
        <Icon as={FaSearch} boxSize={4} color="gray.500" cursor="pointer" />
      </Box>

      {/* Content Section */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="white"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Video element without default controls */}
        <video ref={videoRef} width="100%" height="100%" muted loop>
          <source src={src} type="video/mp4" loading="lazy" />
          Your browser does not support the video tag.
        </video>
      </Box>
    </Box>
  );
};

export default ProjectsAlt;
