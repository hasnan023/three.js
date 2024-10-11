import { useEffect } from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  VStack,
  Stack,
  Button,
  Image,
} from "@chakra-ui/react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

const GoalWrapper = () => {
  useEffect(() => {
    new Glide(".glide", {
      type: "carousel",
      perView: 3,
      gap: 10,
      autoplay: 3000,
      breakpoints: {
        768: { perView: 1 },
        1024: { perView: 2 },
      },
    }).mount();
  }, []);

  return (
    <Box py={10} mt="100px">
      {/* Main Story Section */}
      <Center>
        <VStack spacing={8} width={{ base: "90%", md: "70%" }}>
          {/* Title */}
          <Heading as="h1" size="2xl" fontWeight="bold">
            Our Story
          </Heading>

          {/* Description */}
          <Text fontSize="lg" textAlign="center" lineHeight="1.8">
            At Drip, we’re passionate about helping brands grow through digital
            solutions. From custom Shopify, WordPress, and React-based platforms
            to expert photography and marketing services, we provide end-to-end
            solutions tailored for your business needs.
          </Text>

          {/* Mission Section */}
          <Heading as="h2" size="xl">
            Our Mission
          </Heading>
          <Text textAlign="center" color="gray.600">
            We aim to provide seamless digital experiences that drive business
            growth. Our goal is to empower brands with innovative, scalable, and
            creative solutions.
          </Text>

          {/* Services Offered */}
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={6}
            justifyContent="space-around"
            width="100%"
          >
            <Box textAlign="center">
              <Heading size="md">Shopify & WordPress Development</Heading>
              <Text fontSize="sm" color="gray.500">
                Custom eCommerce and website solutions built for your business.
              </Text>
            </Box>
            <Box textAlign="center">
              <Heading size="md">Product Photography</Heading>
              <Text fontSize="sm" color="gray.500">
                High-quality visuals that tell your brand's story.
              </Text>
            </Box>
            <Box textAlign="center">
              <Heading size="md">Digital Marketing</Heading>
              <Text fontSize="sm" color="gray.500">
                Strategies to reach your audience and grow your business.
              </Text>
            </Box>
            <Box textAlign="center">
              <Heading size="md">Consultancy</Heading>
              <Text fontSize="sm" color="gray.500">
                Expert advice to steer your brand towards success.
              </Text>
            </Box>
          </Stack>

          {/* Photo Gallery - Glide.js */}
          <Heading as="h2" size="xl" mt={10}>
            Our Work
          </Heading>
          <Box className="glide" width="100%">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                <li className="glide__slide">
                  <Image
                    src="/ImageAssets/photographyIconImage.jpg"
                    alt="Project 1"
                  />
                </li>
                <li className="glide__slide">
                  <Image
                    src="/ImageAssets/photographyIconImage.jpg"
                    alt="Project 2"
                  />
                </li>
                <li className="glide__slide">
                  <Image
                    src="/ImageAssets/photographyIconImage.jpg"
                    alt="Project 3"
                  />
                </li>
              </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
              <Button
                className="glide__arrow glide__arrow--left"
                mt="30px"
                data-glide-dir="<"
                variant="outline"
              >
                ←
              </Button>
              <Button
                mt="30px"
                ml="100px"
                className="glide__arrow glide__arrow--right"
                data-glide-dir=">"
                variant="outline"
              >
                ➔
              </Button>
            </div>
          </Box>

          {/* Call to Action */}
          <Button variant="outline" size="lg" alignSelf="center" mt={4}>
            Work With Us
          </Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default GoalWrapper;
