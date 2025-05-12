import React from 'react';
import { Box, Container, Flex, Link, Text, VStack, HStack, Icon, IconProps } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../constants';

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
              Lakshmi Mahendra
            </Text>
            <Text fontSize="sm" color="gray.600" maxW="300px">
              Your trusted dealer for quality home appliances and furniture in Madurai.
            </Text>
          </VStack>
          
          <VStack align={{ base: 'center', md: 'flex-start' }} spacing={2}>
            <Text fontWeight="bold" mb={2}>Quick Links</Text>
            <Link as={RouterLink} to="/" color="gray.600" _hover={{ color: 'brand.primary' }}>
              Home
            </Link>
            <Link as={RouterLink} to="/own-products" color="gray.600" _hover={{ color: 'brand.primary' }}>
              Products
            </Link>
            <Link as={RouterLink} to="/contact" color="gray.600" _hover={{ color: 'brand.primary' }}>
              Contact
            </Link>
          </VStack>

          <VStack align={{ base: 'center', md: 'flex-start' }} spacing={2}>
            <Text fontWeight="bold" mb={2}>Follow Us</Text>
            <HStack spacing={4}>              <Link href={SOCIAL_LINKS.facebook} isExternal aria-label="Facebook">
                <Icon as={FaFacebook as React.FC<IconProps>} boxSize={5} color="facebook.500" />
              </Link>
              <Link href={SOCIAL_LINKS.instagram} isExternal aria-label="Instagram">
                <Icon as={FaInstagram as React.FC<IconProps>} boxSize={5} color="pink.500" />
              </Link>
            </HStack>
          </VStack>
        </Flex>
        
        <Box borderTopWidth={1} borderColor="gray.200" mt={8} pt={6} textAlign="center">
          <Text fontSize="sm" color="gray.500">
            © {year} Lakshmi Mahendra. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
