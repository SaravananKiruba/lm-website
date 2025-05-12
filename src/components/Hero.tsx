import React from 'react';
import { Box, Button, Container, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);

const Hero: React.FC = () => {
  return (
    <Box 
      as="section" 
      bg="brand.light" 
      py={{ base: 12, md: 20 }}
      position="relative"
      overflow="hidden"
    >
      <Container maxW="1200px">
        <Flex 
          direction={{ base: 'column', md: 'row' }} 
          align="center" 
          justify="space-between"
        >
          <VStack 
            align={{ base: 'center', md: 'flex-start' }} 
            spacing={5} 
            maxW={{ base: 'full', md: '550px' }}
            textAlign={{ base: 'center', md: 'left' }}
            zIndex={2}
          >
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Heading 
                as="h1" 
                size="2xl" 
                fontWeight="bold" 
                lineHeight="shorter" 
                color="brand.dark"
              >
                Quality Home Appliances & Furniture
              </Heading>
            </MotionBox>
            
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Text 
                fontSize={{ base: 'lg', md: 'xl' }} 
                color="gray.600"
              >
                Your trusted dealer for premium brands and custom furniture solutions in Madurai since 1995.
              </Text>
            </MotionBox>
            
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Flex 
                direction={{ base: 'column', sm: 'row' }} 
                gap={4} 
                w="full" 
                justify={{ base: 'center', md: 'flex-start' }}
              >
                <Button 
                  as={RouterLink} 
                  to="/own-products" 
                  colorScheme="blue" 
                  size="lg" 
                  rightIcon={<FaArrowRight />}
                >
                  Explore Products
                </Button>
                <Button 
                  as={RouterLink} 
                  to="/contact" 
                  variant="outline" 
                  size="lg"
                >
                  Contact Us
                </Button>
              </Flex>
            </MotionBox>
          </VStack>
          
          {/* Decorative elements */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            display={{ base: 'none', md: 'block' }}
            width="450px"
            height="450px"
            borderRadius="full"
            bg="brand.primary"
            opacity="0.1"
            position="absolute"
            top="-100px"
            right="-100px"
            zIndex={1}
          />
          
          <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            display={{ base: 'none', md: 'block' }}
            width="300px"
            height="300px"
            borderRadius="full"
            bg="brand.accent"
            opacity="0.1"
            position="absolute"
            bottom="-50px"
            left="-50px"
            zIndex={1}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
