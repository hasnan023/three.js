import React from 'react';
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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaUser, FaCog } from 'react-icons/fa'; // Use 'react-icons/fa' for these icons

// Define the navigation items
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

const profileSettingsItems = [
  { icon: <FaUser /> },
  { icon: <FaCog /> },
];

const Sidebar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <>
      {/* Mobile Sidebar (Drawer) */}
      {!isDesktop && (
        <>
          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            onClick={onToggle}
            display={{ base: 'block', md: 'none' }} // Show this button on mobile
            // position="fixed"
            top={4}
            left={4}
           
          />
          <Drawer isOpen={isOpen} onClose={onClose} placement="left">
            <DrawerOverlay>
              <DrawerContent>
                <DrawerHeader borderBottomWidth="1px">
                  <HStack justify="space-between">
                    <Text fontSize="lg" fontWeight="bold">Modal.Js</Text>
                    <IconButton
                      aria-label="Close Menu"
                      icon={<CloseIcon />}
                      onClick={onClose}
                    />
                  </HStack>
                </DrawerHeader>
                <DrawerBody>
                  <VStack spacing={4} align="start">
                    {navItems.map((item) => (
                      <Text key={item.label} fontSize="lg" fontWeight="bold">
                        {item.label}
                      </Text>
                    ))}
                    {profileSettingsItems.map((item, index) => (
                      <HStack key={index} spacing={2}>
                        <Box as="span" fontSize="lg">{item.icon}</Box>
                      </HStack>
                    ))}
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
          as="nav"
          p={4}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          boxShadow="md"
        //   position="fixed"
          top={0}
          left={0}
          w="100%"
          
        >
          <Text fontSize="lg" fontWeight="bold" ml={4}>
            Modal.Js
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
                <Text key={item.label} fontSize="md" fontWeight="bold">
                  {item.label}
                </Text>
              ))}
            </HStack>
            <HStack spacing={8}>
              {profileSettingsItems.map((item, index) => (
                <Box key={index} as="span" fontSize="lg">
                  {item.icon}
                </Box>
              ))}
            </HStack>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Sidebar;
// const Sidebar=()=>{
//     return(
//  <>hi sidebar</> 
//     )
// }
// export default Sidebar;