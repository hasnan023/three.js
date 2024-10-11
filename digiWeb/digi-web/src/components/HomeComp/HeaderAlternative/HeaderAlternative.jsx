import React from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Image,
  Button,
  Tooltip,
} from "@chakra-ui/react";

const HeaderAlternative = () => {
  return (
    <>
      {/* Header section with text */}
      <Box position="relative" overflow="hidden" mt="7%">
        <Grid
          mx="20px"
          templateRows="repeat(1, 1fr)" // Single row
          templateColumns="repeat(6, 1fr)" // 7 columns
        >
          <GridItem colSpan={4}>
            <Box ml="20px">
              <Text
                fontWeight="bolder"
                fontFamily="Poppins"
                fontSize="50px"
                letterSpacing="0.2rem"
                sx={{
                  "@keyframes blink": {
                    "0%": { opacity: 1 },
                    "50%": { opacity: 0 },
                    "100%": { opacity: 1 },
                  },
                }}
              >
                Strong Website
                <br />
                <span
                  style={{
                    display: "inline",
                    position: "relative",
                    whiteSpace: "nowrap",
                  }}
                >
                  builds
                  <span
                    style={{
                      display: "inline-block",
                      width: "150px", // Adjust width for caret appearance
                      height: "2px", // Set height to make it look like a line
                      backgroundColor: "gray",
                      animation: "blink 1s steps(1, start) infinite",
                      marginLeft: "65px", // Space between text and caret
                      marginTop: "19px",
                      verticalAlign: "middle", // Aligns caret vertically with text
                      lineHeight: "1", // Ensures the caret aligns with text vertically
                    }}
                  />
                </span>
                <br /> business resilience
              </Text>
            </Box>
          </GridItem>
          <GridItem colSpan={2}>
            <Box>
              <Button borderRadius="20px">Connect</Button>
              <Button borderRadius="20px" colorScheme="red" ml={3}>
                Login
              </Button>
              <Text color="gray" mt={3}>
                From web development and design to digital marketing, we help
                startups and companies create a strong digital presence that
                drives growth and innovation
              </Text>
              <Button borderRadius="20px">Explore</Button>
              <Button borderRadius="20px" colorScheme="red" ml={3}>
                ↷
              </Button>
            </Box>
          </GridItem>
        </Grid>

        {/* Image and info section */}
        <Grid
          mx="20px"
          mt={0} // Added margin-top for spacing between grids
          p={3}
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(9, 1fr)"
          gap={4}
        >
          {/* Large image */}
          <GridItem colSpan={5} bg="gray.200" borderRadius="30px">
            <Image
              src="/ImageAssets/1.webp"
              loading="lazy"
              height="100%"
              width="90%"
              ml="20px"
            />
          </GridItem>

          {/* Info boxes */}
          <GridItem colSpan={2} bg="gray.200" borderRadius="30px" p={4}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Text as="h3">Welcome</Text>
              {/* <Tooltip label="login for booking">
                <Button bg="gray.200">↷</Button>
              </Tooltip> */}
            </Box>
            <Text as="h5" mb={10}>
              This is Drip
            </Text>
            <Image src="/ImageAssets/headrerCardTwo.png" />
          </GridItem>

          <GridItem colSpan={2} bg="gray.200" borderRadius="30px" p={4}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Text as="h3" mb={4}>
                How can we help you?
              </Text>

              {/* First Label and Button */}
              <Box mb={4} display="flex" flexDirection="column">
                <Text as="label" fontWeight="bold" mb={2}>
                  Do you want to chat?
                </Text>
                <Button size="sm" colorScheme="blue" borderRadius="15px">
                  Choose one
                </Button>
              </Box>

              {/* Second Label and Button */}
              <Box mb={4} display="flex" flexDirection="column">
                <Text as="label" fontWeight="bold" mb={2}>
                  Do you want to call?
                </Text>
                <Button size="sm" colorScheme="blue" borderRadius="15px">
                  Choose one
                </Button>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* Stats section */}
      <Box
        p={4}
        display="flex"
        flexDirection="row"
        justifyContent="space-evenly"
        mt={8}
      >
        <Box display="flex" alignItems="center">
          <Text fontSize="3xl" fontWeight="bold" mr={4}>
            8+
          </Text>
          <Text fontSize="sm" color="gray">
            Years of <br />
            Experienced people
          </Text>
        </Box>

        <Box display="flex" alignItems="center">
          <Text fontSize="3xl" fontWeight="bold" mr={4}>
            10+
          </Text>
          <Text fontSize="sm" color="gray">
            Project Completion <br />
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

export default HeaderAlternative;
