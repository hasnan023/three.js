import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Gallery = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }} // Stack vertically on small screens, horizontally on medium and larger screens
      align="center"
      justify="center"
      px={4} // Add some horizontal padding for small screens
      wrap="wrap" // Ensure content wraps on small screens
    >
      {/* Image section */}
      <Box
        flex={{ base: "1", md: "3" }}
        mb={{ base: 4, md: 0 }}
        textAlign="center"
      >
        <Image
          src="/ImageAssets/galleryImage.png"
          height={{ base: "auto", md: "500px" }} // Fit image automatically on small screens, fixed height on larger screens
          width={{ base: "100%", md: "auto" }} // Full width on small screens
          objectFit="contain" // Ensure the image fits well within its container
        />
      </Box>

      {/* Text section */}
      <Text
        flex={{ base: "1", md: "2" }}
        mt={{ base: 0, md: 0 }} // Adjust margin-top on larger screens, smaller top margin on small screens
        fontWeight="bold"
        fontSize={{ base: "24px", md: "30px" }} // Smaller font on small screens
        textAlign={{ base: "center", md: "left" }} // Centered text on small screens, left-aligned on larger screens
      >
        Own every click, every vibe,
        <br />
        every deal. Slay all day!
      </Text>
    </Flex>
  );
};

export default Gallery;
