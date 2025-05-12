import React from 'react';
import { Box, Container, Heading, SimpleGrid, Text, VStack, Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import BrandCard from '../components/BrandCard';
import { DEALERSHIP_BRANDS } from '../constants';

const MotionBox = motion(Box);

const Dealership: React.FC = () => {
  return (
    <Box>
      {/* Header */}
      <Box bg="brand.light" py={12} mb={8}>
        <Container maxW="1200px">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <VStack spacing={3} textAlign="center">
              <Heading as="h1" size="2xl" color="brand.dark">
                Our Dealerships
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="700px">
                We are authorized dealers for premium brands, offering genuine products with full warranty
              </Text>
            </VStack>
          </MotionBox>
        </Container>
      </Box>

      <Container maxW="1200px" pb={16}>
        {/* Benefits section */}
        <Box mb={16}>
          <VStack spacing={8} mb={10} textAlign="center">
            <Heading as="h2" size="xl" color="brand.dark">
              Why Buy From Authorized Dealers?
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="800px">
              When you purchase from Lakshmi Sumati, you get genuine products, manufacturer warranty, and excellent after-sales service
            </Text>
          </VStack>

          <Flex 
            direction={{ base: 'column', md: 'row' }} 
            align="center" 
            justify="space-between"
            gap={10}
          >
            <Box 
              maxW={{ base: 'full', md: '50%' }}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1581783898377-1c85bf937427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Authorized Dealership"
                w="full"
                h="auto"
                objectFit="cover"
                fallbackSrc="https://via.placeholder.com/800x500?text=Authorized+Dealership"
              />
            </Box>
            
            <VStack 
              align={{ base: 'center', md: 'flex-start' }} 
              textAlign={{ base: 'center', md: 'left' }}
              spacing={6}
              maxW={{ base: 'full', md: '50%' }}
            >
              <MotionBox
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <VStack align={{ base: 'center', md: 'flex-start' }} spacing={2}>
                  <Heading as="h3" size="md" color="brand.primary">
                    Genuine Products
                  </Heading>
                  <Text color="gray.600">
                    All products are sourced directly from manufacturers, ensuring authenticity and quality.
                  </Text>
                </VStack>
              </MotionBox>
              
              <MotionBox
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <VStack align={{ base: 'center', md: 'flex-start' }} spacing={2}>
                  <Heading as="h3" size="md" color="brand.primary">
                    Manufacturer Warranty
                  </Heading>
                  <Text color="gray.600">
                    Enjoy complete manufacturer warranty coverage for peace of mind with your purchase.
                  </Text>
                </VStack>
              </MotionBox>
              
              <MotionBox
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <VStack align={{ base: 'center', md: 'flex-start' }} spacing={2}>
                  <Heading as="h3" size="md" color="brand.primary">
                    Expert After-Sales Service
                  </Heading>
                  <Text color="gray.600">
                    Our team provides reliable after-sales support to ensure your products perform optimally.
                  </Text>
                </VStack>
              </MotionBox>
            </VStack>
          </Flex>
        </Box>

        {/* Brands */}
        <Box>
          <Heading as="h2" size="xl" color="brand.dark" textAlign="center" mb={10}>
            Our Brand Partners
          </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
            {DEALERSHIP_BRANDS.map(brand => (
              <BrandCard key={brand.id} {...brand} />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default Dealership;
