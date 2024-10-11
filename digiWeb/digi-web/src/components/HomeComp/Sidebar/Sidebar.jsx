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
  Menu,
  Image,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { FaSun, FaUser, FaCog } from "react-icons/fa"; // Use 'react-icons/fa' for these icons
import Link from "next/link";

// Define the navigation items
const navItems = [
  { label: "Home", href: "/home" },
  { label: "Services", href: "/services" },
  { label: "Story", href: "/goal" },
  { label: "Contact", href: "/contact" },
];

const profileSettingsItems = [{ icon: <FaCog /> }];

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
                    <Menu>
                      <MenuButton as={Box} fontSize="lg" cursor="pointer">
                        <FaUser />
                      </MenuButton>
                      <MenuList>
                        <MenuItem>
                          <Link href="/login" passHref>
                            <Text as="a" fontSize="md">
                              Login
                            </Text>
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link href="/register" passHref>
                            <Text as="a" fontSize="md">
                              Register
                            </Text>
                          </Link>
                        </MenuItem>
                      </MenuList>
                    </Menu>
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
          borderRadius="lg"
          as="nav"
          p={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          boxShadow="md"
          w="80%"
          zIndex="1000" // To ensure it stays above other content
        >
          {/* <Text fontSize="lg" fontWeight="bold" mr="120px" ml="10px">
            Drip
          </Text> */}
          <Image src="favicon.png" height="50px" width="120px" />
          <Flex
            align="center"
            maxW="container.lg"
            mx="50px"
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
                    _hover={{ textDecoration: "none", bg: "gray.200" }}
                    p={2}
                    borderRadius="md"
                  >
                    {item.label}
                  </Text>
                </Link>
              ))}
            </HStack>
            <HStack spacing={8}>
              <Menu>
                <MenuButton as={Box} fontSize="lg" cursor="pointer">
                  <FaUser />
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link href="/login" passHref>
                      <Text as="a" fontSize="md">
                        Login
                      </Text>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/register" passHref>
                      <Text as="a" fontSize="md">
                        Register
                      </Text>
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
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
