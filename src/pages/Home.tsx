import React from 'react';
import { Box, Container, Heading, SimpleGrid, Text, Button, Flex, Icon, VStack, Divider as ChakraDivider, Center, IconProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { FaCouch, FaTools, FaShieldAlt, FaHandshake } from 'react-icons/fa';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';

const MotionBox = motion(Box);

const FeatureBox: React.FC<{ icon: React.ReactElement; title: string; description: string }> = ({ icon, title, description }) => (
  <MotionBox
    whileHover={{ y: -5 }}
    p={6}
    bg="white"
    boxShadow="md"
    borderRadius="lg"
    textAlign="center"
  >
    <Center mb={4}>
      <Box color="brand.primary" p={3} borderRadius="full" bg="brand.light">
        {icon}
      </Box>
    </Center>
    <Heading as="h3" size="md" mb={2} fontWeight="semibold">
      {title}
    </Heading>
    <Text color="gray.600">
      {description}
    </Text>
  </MotionBox>
);

const Home: React.FC = () => {
  // Featured products (2 from furniture and 1 from appliances)
  const featuredProducts = [
    ...PRODUCTS.furniture.slice(0, 2),
    ...PRODUCTS.appliances.slice(0, 1)
  ];

  return (
    <Box>
      <Hero />

      {/* Features Section */}      <Box py={16} bg="white">
        <Container maxW="1200px">
          <VStack gap={4} mb={12} textAlign="center">
            <Heading as="h2" size="xl" color="brand.dark">
              Why Choose Lakshmi Sumati?
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="700px">
              We provide quality home solutions with trusted service for over two decades
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8}>            <FeatureBox
              icon={<Icon as={FaCouch as React.FC<IconProps>} boxSize={8} />}
              title="Quality Products"
              description="We offer a wide range of high-quality furniture and appliances from trusted brands."
            />            <FeatureBox
              icon={<Icon as={FaTools as React.FC<IconProps>} boxSize={8} />}
              title="Expert Support"
              description="Our team provides expert guidance to help you find the perfect products for your home."
            />            <FeatureBox
              icon={<Icon as={FaShieldAlt as React.FC<IconProps>} boxSize={8} />}
              title="Warranty Assured"
              description="All our products come with manufacturer warranty and our service guarantee."
            />
            <FeatureBox
              icon={<Icon as={FaHandshake as React.FC<IconProps>} boxSize={8} />}
              title="Customer First"
              description="We prioritize customer satisfaction with transparent pricing and reliable service."
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Featured Products Section */}      <Box py={16} bg="gray.50">
        <Container maxW="1200px">
          <VStack gap={4} mb={12} textAlign="center">
            <Heading as="h2" size="xl" color="brand.dark">
              Featured Products
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="700px">
              Explore our selection of high-quality furniture and appliances
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} mb={10}>
            {featuredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </SimpleGrid>

          <Center>              <Button 
              onClick={() => window.location.href = '/own-products'} 
              size="lg" 
              colorScheme="red" 
            >
              View All Products
            </Button>
          </Center>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box py={16} bg="brand.primary">
        <Container maxW="1200px">
          <Flex 
            direction={{ base: 'column', md: 'row' }} 
            align="center" 
            justify="space-between"
          >            <VStack 
              align={{ base: 'center', md: 'flex-start' }} 
              gap={3} 
              mb={{ base: 6, md: 0 }}
              textAlign={{ base: 'center', md: 'left' }}
            >
              <Heading color="white" size="lg">
                Ready to Transform Your Space?
              </Heading>
              <Text color="whiteAlpha.900">
                Visit our store or contact us today to explore more options.
              </Text>
            </VStack>
              <Button 
              onClick={() => window.location.href = '/contact'} 
              size="lg" 
              bg="white" 
              color="brand.primary"
              _hover={{ bg: 'whiteAlpha.800' }}
            >
              Contact Us
            </Button>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
