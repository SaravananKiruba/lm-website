import React from 'react';
import { Box, Container, Flex, Link, Text, VStack, HStack, Icon, IconProps } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import { getWhatsAppLink } from '../utils/helpers';
import { CONTACT_INFO } from '../constants';

const MotionLink = motion(Link);
const MotionIcon = motion(Icon);

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <Box as="footer" bg="gray.50" py={8} mt={8}>
      <Container maxW="1200px">
        <Flex 
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'center', md: 'flex-start' }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <VStack align={{ base: 'center', md: 'flex-start' }} mb={{ base: 6, md: 0 }}>
            <Text fontSize="lg" fontWeight="bold" color="brand.primary" mb={2}>
              Lakshmi Sumati
            </Text>
            <Text fontSize="sm" color="gray.600" maxW="300px">
              Your trusted dealer for quality home appliances and furniture in Madurai.
            </Text>
          </VStack>
          
          <VStack align={{ base: 'center', md: 'flex-start' }} spacing={2}>
            <Text fontWeight="bold" mb={2}>Quick Links</Text>
            <MotionLink 
              as={RouterLink} 
              to="/" 
              color="gray.600" 
              _hover={{ color: 'brand.primary', textDecoration: 'none' }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Home
            </MotionLink>
            <MotionLink 
              as={RouterLink} 
              to="/own-products" 
              color="gray.600" 
              _hover={{ color: 'brand.primary', textDecoration: 'none' }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Products
            </MotionLink>
            <MotionLink 
              as={RouterLink} 
              to="/contact" 
              color="gray.600" 
              _hover={{ color: 'brand.primary', textDecoration: 'none' }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Contact
            </MotionLink>
          </VStack>          <VStack align={{ base: 'center', md: 'flex-start' }} spacing={2}>
            <Text fontWeight="bold" mb={2}>Follow Us</Text>
            <HStack spacing={4}>
              <MotionLink 
                href={getWhatsAppLink(CONTACT_INFO.whatsapp)}
                isExternal 
                aria-label="WhatsApp"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <MotionIcon 
                  as={FaWhatsapp as React.FC<IconProps>} 
                  boxSize={5} 
                  color="green.500"
                  whileHover={{ rotate: 5, scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
              </MotionLink>
              <MotionLink 
                href={SOCIAL_LINKS.instagram} 
                isExternal 
                aria-label="Instagram"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <MotionIcon 
                  as={FaInstagram as React.FC<IconProps>} 
                  boxSize={5} 
                  color="brand.primary"
                  whileHover={{ rotate: 5, scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
              </MotionLink>
            </HStack>
          </VStack>
        </Flex>
        
        <Box borderTopWidth={1} borderColor="gray.200" mt={8} pt={6} textAlign="center">
          <Text fontSize="sm" color="gray.500">
            © {year} Lakshmi Sumati. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>  );
};

export default Footer;
