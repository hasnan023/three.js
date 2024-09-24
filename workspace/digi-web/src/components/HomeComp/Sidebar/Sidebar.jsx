import React from "react";
import {
  Box,
  IconButton,
  VStack,
  HStack,
  Text,
  useDisclosure,
  useBreakpointValue,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { FaSun } from "react-icons/fa";
import { FaUser, FaCog } from "react-icons/fa"; // Use 'react-icons/fa' for these icons
import Link from "next/link";

// Define the navigation items
const navItems = [
  { label: "Home", href: "/home" },
  { label: "Services", href: "/services" },
  { label: "Our Story", href: "/goal" },
  { label: "Contact", href: "/contact" },
];

const profileSettingsItems = [{ icon: <FaUser /> }, { icon: <FaCog /> }];

const Sidebar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const { colorMode, toggleColorMode } = useColorMode();

  // Determine icon based on color mode
  const icon = colorMode === "light" ? <MoonIcon /> : <FaSun />;

  const handleToggle = () => {
    toggleColorMode();
  };

  return (
    <>
      {/* Mobile Sidebar (Drawer) */}
      {!isDesktop && (
        <>
          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            onClick={onToggle}
            display={{ base: "block", md: "none" }} // Show this button on mobile
            position="fixed" // Fix the button to the top-left
            top="4" // Optional: Adjust to your preferred value
            left="4"
            zIndex="1001"
          />
          <Drawer isOpen={isOpen} onClose={onClose} placement="left">
            <DrawerOverlay>
              <DrawerContent>
                <DrawerHeader borderBottomWidth="1px">
                  <HStack justify="space-between">
                    <Text fontSize="lg" fontWeight="bold">
                      Drip
                    </Text>
                    <IconButton
                      aria-label="Close Menu"
                      icon={<CloseIcon />}
                      onClick={onClose}
                    />
                  </HStack>
                </DrawerHeader>
                <DrawerBody ml={4}>
                  <VStack spacing={4} align="start">
                    {navItems.map((item) => (
                      <Link href={item.href} key={item.label} passHref>
                        <Text
                          as="a"
                          fontSize="lg"
                          fontWeight="bold"
                          cursor="pointer"
                          _hover={{ textDecoration: "underline" }}
                        >
                          {item.label}
                        </Text>
                      </Link>
                    ))}
                    {profileSettingsItems.map((item, index) => (
                      <HStack key={index} spacing={2}>
                        <Box as="span" fontSize="lg">
                          {item.icon}
                        </Box>
                      </HStack>
                    ))}
                    <div
                      aria-label="Toggle Color Mode"
                      icon={icon}
                      onClick={handleToggle}
                      _focus={{ outline: "none" }} // Optionally remove focus outline
                    >
                      {icon}
                    </div>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </>
      )}

      {/* Desktop Sidebar */}
      {isDesktop && (
        <Box
          position="fixed"
          top="7%"
          left="50%"
          transform="translate(-50%, -50%)"
          borderRadius="250px"
          as="nav"
          p={4}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          boxShadow="md"
          w="60%"
          zIndex="1000" // To ensure it stays above other content
        >
          <Text fontSize="lg" fontWeight="bold" mr={8}>
            Drip
          </Text>
          <Flex
            align="center"
            maxW="container.lg"
            mx="auto"
            w="100%"
            justify="space-between"
          >
            <HStack spacing={8}>
              {navItems.map((item) => (
                <Link href={item.href} key={item.label} passHref>
                  <Text
                    as="a"
                    fontSize="md"
                    fontWeight="bold"
                    cursor="pointer"
                    _hover={{ textDecoration: "underline" }}
                  >
                    {item.label}
                  </Text>
                </Link>
              ))}
            </HStack>
            <HStack spacing={8}>
              {profileSettingsItems.map((item, index) => (
                <Box key={index} as="span" fontSize="lg">
                  {item.icon}
                </Box>
              ))}
              <div
                aria-label="Toggle Color Mode"
                icon={icon}
                onClick={handleToggle}
                _focus={{ outline: "none" }} // Optionally remove focus outline
              >
                {icon}
              </div>
            </HStack>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Sidebar;
