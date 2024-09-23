// Install necessary packages first
// npm install react-slick slick-carousel

import React from "react";
import {
  Box,
  Heading,
  Text,
  Avatar,
  Container,
  VStack,
  Icon,
  Tooltip,
  HStack,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";

// Import the necessary CSS for the slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO, Acme Inc.",
    content:
      "This service was amazing! It exceeded all my expectations and the team was very professional.",
    avatar: "/avatar1.png",
    rating: 5,
  },
  {
    name: "Jane Smith",
    title: "Marketing Manager, XYZ Corp.",
    content:
      "I was blown away by the quality and speed of delivery. Highly recommend to everyone!",
    avatar: "/avatar2.png",
    rating: 4,
  },
  {
    name: "Michael Brown",
    title: "CTO, MegaTech",
    content:
      "The best service I have used in a long time. The team went above and beyond to meet our needs.",
    avatar: "/avatar3.png",
    rating: 5,
  },
  {
    name: "John Brown",
    title: "CTO, MegaTech",
    content:
      "The best service I have used in a long time. The team went above and beyond to meet our needs.",
    avatar: "/avatar3.png",
    rating: 5,
  },
  {
    name: "John Brown",
    title: "CTO, MegaTech",
    content:
      "The best service I have used in a long time. The team went above and beyond to meet our needs.",
    avatar: "/avatar3.png",
    rating: 5,
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

const Testimonials = () => {
  // Slider settings for react-slick
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
    <Container maxW="container.xl" py={20}>
      <Heading as="h1" size="2xl" textAlign="center" mb={10}>
        Our Clients
      </Heading>

      {/* Slider Component */}
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} p={4}>
            <VStack
              key={index}
              spacing={2}
              align="center"
              maxW="sm"
              textAlign="center"
            >
              <Avatar
                src={testimonial.avatar}
                name={testimonial.name}
                size="xl"
                borderWidth={2}
                borderColor="black.500"
                boxShadow="lg"
              />
              <Box>
                <Text fontWeight="bold" fontSize="lg" color="black.600">
                  {testimonial.name}
                </Text>
                <Text fontSize="sm" color="gray.500" mb={2}>
                  {testimonial.title}
                </Text>
                <HStack spacing={1} justify="center">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Icon
                      as={FaStar}
                      key={i}
                      color={i < testimonial.rating ? "orange" : "gray.300"}
                    />
                  ))}
                </HStack>
                <Tooltip
                  label={testimonial.content}
                  fontSize="md"
                  color="white"
                >
                  <Text
                    mt={3}
                    fontSize="md"
                    color="gray"
                    isTruncated
                    maxW="200px"
                  >
                    “{testimonial.content}”
                  </Text>
                </Tooltip>
              </Box>
            </VStack>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default Testimonials;
