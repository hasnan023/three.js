import { useState } from "react";
import {
  Box,
  Heading,
  Image,
  Container,
  Flex,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Text,
  Center,
} from "@chakra-ui/react";
import { FaSearchPlus } from "react-icons/fa"; // Import magnifier icon
import Slider from "react-slick";

// Import the necessary CSS for the slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Project 1",
    description:
      "A well-designed solar company website boosts leads and revenue. It should be visually attractive, user-friendly ...",
    images: [
      "/p1/1 (1).png",
      "/p1/1 (2).png",
      "/p1/1 (3).png",
      "/p1/1 (4).png",
      "/p1/1 (5).png",
      "/p1/1 (6).png",
      "/p1/1 (7).png",
      "/p1/1 (8).png",
      "/p1/1 (9).png",
      "/p1/1 (10).png",
    ],
  },
  {
    title: "Project 2",
    description:
      "A well-designed solar company website boosts leads and revenue. It should be visually attractive, user-friendly ...",
    images: [
      "/p2/1  (1).png",
      "/p2/1  (2).png",
      "/p2/1  (3).png",
      "/p2/1  (4).png",
      "/p2/1  (5).png",
      "/p2/1  (6).png",
      "/p2/1  (7).png",
    ],
  },
];
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        right: "10px", // Adjust as needed
        transform: "translateY(-50%)",
        cursor: "pointer",
        color: "black", // Change this to your desired color
        zIndex: 1, // Ensure it is above other content
      }}
      onClick={onClick}
    >
      ➔ {/* Use any arrow icon or character */}
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "10px", // Adjust as needed
        transform: "translateY(-50%)",
        cursor: "pointer",
        color: "black", // Change this to your desired color
        zIndex: 1, // Ensure it is above other content
      }}
      onClick={onClick}
    >
      ← {/* Use any arrow icon or character */}
    </div>
  );
};

const Projects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image click
  const handleMagnifierClick = (image) => {
    setSelectedImage(image);
    onOpen();
  };

  const settings = {
    dots: true, // Enable dots for navigation
    infinite: true, // Infinite loop scrolling
    speed: 500, // Transition speed in ms
    slidesToShow: 4, // Number of testimonials to show on larger screens
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Use custom next arrow
    prevArrow: <PrevArrow />, // Use custom previous arrow
    responsive: [
      {
        breakpoint: 768, // Below this screen width
        settings: {
          slidesToShow: 2, // Show 1 testimonial on small screens
        },
      },
    ],
  };

  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" size="2xl" mb={10} textAlign="center">
        Projects
      </Heading>

      {projects.map((project, index) => (
        <Box key={index} mb={12}>
          <Heading as="h2" size="lg" mb={6}>
            {project.title}
          </Heading>
          <Center>
            <Text p={2} mb={2}>
              {project.description}
            </Text>
          </Center>

          {/* Flexbox layout for images */}
          <Flex wrap="nowrap" overflow="hidden">
            {project.images.map((image, imgIndex) => (
              <Box
                key={imgIndex}
                position="relative"
                flex="1 1 100px" // Initial size
                height="220px" // Height of the image container
                overflow="hidden"
                transition="flex 0.3s ease" // Smooth flex transition
                _hover={{
                  flex: "1 1 550px", // Increase the width on hover
                  "& .magnifier-icon": {
                    opacity: 1, // Show icon on hover
                  },
                }}
              >
                <Image
                  src={image}
                  alt={`Project image ${imgIndex + 1}`}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />

                {/* Magnifier icon on hover */}
                <IconButton
                  icon={<FaSearchPlus />}
                  className="magnifier-icon"
                  position="absolute"
                  top="10px"
                  right="10px"
                  aria-label="Magnify image"
                  colorScheme="white"
                  size="sm"
                  opacity={0} // Initially hidden
                  transition="opacity 0.2s ease-in-out"
                  // _hover={{ opacity: 1 }} // Show on hover
                  onClick={() => handleMagnifierClick(image)}
                />
              </Box>
            ))}
          </Flex>
        </Box>
      ))}

      {/* Modal for displaying full image */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent maxW="90vw" maxH="90vh">
          <ModalCloseButton />
          <ModalBody p={0}>
            <Image
              src={selectedImage}
              alt="Selected project image"
              objectFit="contain"
              width="100%"
              height="100%"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Projects;
