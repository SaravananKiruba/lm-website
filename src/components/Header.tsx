import React from 'react';
import { Box, Flex, Heading, HStack, Link, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, VStack, Text, CloseButton } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaPhone, FaWhatsapp, FaBars } from 'react-icons/fa';
import { CONTACT_INFO } from '../constants';
import { getPhoneLink, getWhatsAppLink } from '../utils/helpers';

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Our Products', path: '/own-products' },
    { name: 'Dealership', path: '/dealership' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <Box as="header" bg="white" boxShadow="md" position="sticky" top={0} zIndex={10}>
      <Flex 
        justify="space-between" 
        align="center" 
        maxW="1200px" 
        mx="auto" 
        px={4} 
        py={2}
        wrap="wrap"
      >
        <Flex align="center">
          <Heading 
            as={RouterLink} 
            to="/"
            fontSize={{ base: "xl", md: "2xl" }} 
            color="brand.primary"
            _hover={{ textDecoration: 'none' }}
          >
            Lakshmi Mahendra
          </Heading>
        </Flex>

        {/* Desktop Navigation */}
        <HStack 
          spacing={8} 
          display={{ base: "none", md: "flex" }}
        >
          {links.map((link) => (
            <Link
              key={link.path}
              as={RouterLink}
              to={link.path}
              fontWeight={location.pathname === link.path ? "bold" : "normal"}
              color={location.pathname === link.path ? "brand.primary" : "gray.600"}
              _hover={{ textDecoration: 'none', color: 'brand.primary' }}
            >
              {link.name}
            </Link>
          ))}
        </HStack>

        {/* Contact Buttons */}
        <HStack spacing={2}>
          <IconButton
            as="a"
            href={getPhoneLink(CONTACT_INFO.mobile1)}
            aria-label="Call us"
            icon={<FaPhone />}
            colorScheme="green"
            size={{ base: "sm", md: "md" }}
            variant="solid"
            borderRadius="full"
          />
          <IconButton
            as="a"
            href={getWhatsAppLink(CONTACT_INFO.whatsapp)}
            aria-label="WhatsApp"
            icon={<FaWhatsapp />}
            colorScheme="whatsapp"
            size={{ base: "sm", md: "md" }}
            variant="solid"
            borderRadius="full"
          />
          <IconButton
            aria-label="Open menu"
            icon={<FaBars />}
            variant="ghost"
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
          />
        </HStack>
      </Flex>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" display="flex" justifyContent="space-between">
            <Text>Menu</Text>
            <CloseButton onClick={onClose} />
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="start" mt={4}>
              {links.map((link) => (
                <Link
                  key={link.path}
                  as={RouterLink}
                  to={link.path}
                  w="full"
                  p={2}
                  borderRadius="md"
                  fontWeight={location.pathname === link.path ? "bold" : "normal"}
                  bg={location.pathname === link.path ? "brand.light" : "transparent"}
                  color={location.pathname === link.path ? "brand.primary" : "gray.600"}
                  _hover={{ bg: 'brand.light', textDecoration: 'none' }}
                  onClick={onClose}
                >
                  {link.name}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
