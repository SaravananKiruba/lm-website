import React from 'react';
import { Box, Container, Heading, Text, VStack, Flex, Image, SimpleGrid, Icon, IconProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaHistory, FaAward, FaHandshake, FaUsers } from 'react-icons/fa';

const MotionBox = motion(Box);

const ValueCard: React.FC<{ icon: React.ReactElement; title: string; description: string }> = ({ icon, title, description }) => (
  <MotionBox
    whileHover={{ y: -5 }}
    p={6}
    bg="white"
    boxShadow="md"
    borderRadius="lg"
  >
    <Flex direction="column" align="center" textAlign="center">
      <Box color="brand.primary" mb={4}>
        {icon}
      </Box>
      <Heading as="h3" size="md" mb={3}>
        {title}
      </Heading>
      <Text color="gray.600">
        {description}
      </Text>
    </Flex>
  </MotionBox>
);

const About: React.FC = () => {
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
                About Us
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="700px">
                Learn about our journey, values, and commitment to quality
              </Text>
            </VStack>
          </MotionBox>
        </Container>
      </Box>

      <Container maxW="1200px" pb={16}>
        {/* Our Story */}
        <Box mb={16}>
          <Flex 
            direction={{ base: 'column-reverse', md: 'row' }} 
            align="center" 
            justify="space-between"
            gap={10}
          >
            <VStack 
              align={{ base: 'center', md: 'flex-start' }} 
              textAlign={{ base: 'center', md: 'left' }}
              spacing={6}
              maxW={{ base: 'full', md: '50%' }}
            >
              <Heading as="h2" size="xl" color="brand.dark">
                Our Story
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Lakshmi Sumati was established in 1995 with a vision to provide quality home furniture and appliances to the people of Madurai. What started as a small shop has now grown into a trusted name in the industry.
              </Text>
              <Text fontSize="lg" color="gray.600">
                For over two decades, we have maintained our commitment to quality, customer satisfaction, and reliable service. Our journey has been defined by our dedication to bringing premium brands and products to our customers at competitive prices.
              </Text>
              <Text fontSize="lg" color="gray.600">
                Today, we are proud to be authorized dealers for several leading brands in the industry, while also offering our own line of custom-made furniture designed to meet the specific needs of our customers.
              </Text>
            </VStack>
            
            <Box 
              maxW={{ base: 'full', md: '45%' }}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1594129943755-0ca17bba9f66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Store Front"
                w="full"
                h="auto"
                objectFit="cover"
                fallbackSrc="https://via.placeholder.com/800x600?text=Our+Store"
              />
            </Box>
          </Flex>
        </Box>

        {/* Our Values */}
        <Box mb={16}>
          <VStack spacing={4} mb={12} textAlign="center">
            <Heading as="h2" size="xl" color="brand.dark">
              Our Values
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="700px">
              Principles that guide us every day
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            <ValueCard              icon={<Icon as={FaAward as React.FC<IconProps>} boxSize={10} />}
              title="Quality"
              description="We believe in offering only the best quality products that provide long-term value to our customers."
            />
            <ValueCard              icon={<Icon as={FaHandshake as React.FC<IconProps>} boxSize={10} />}
              title="Integrity"
              description="Honesty and transparency are at the core of our business practices and customer relationships."
            />
            <ValueCard
              icon={<Icon as={FaUsers as React.FC<IconProps>} boxSize={10} />}
              title="Customer-first"
              description="Our customers' needs and satisfaction drive every decision we make as a business."
            />
            <ValueCard              icon={<Icon as={FaHistory as React.FC<IconProps>} boxSize={10} />}
              title="Reliability"
              description="We stand behind our products and services, ensuring consistent quality and support."
            />
          </SimpleGrid>
        </Box>

        {/* Our Promise */}
        <Box>
          <Flex 
            direction={{ base: 'column', md: 'row' }} 
            align="center" 
            justify="space-between"
            bg="brand.light"
            borderRadius="lg"
            p={{ base: 6, md: 10 }}
            gap={8}
          >
            <VStack 
              align={{ base: 'center', md: 'flex-start' }} 
              textAlign={{ base: 'center', md: 'left' }}
              spacing={4}
              maxW={{ base: 'full', md: '60%' }}
            >
              <Heading as="h2" size="xl" color="brand.dark">
                Our Promise to You
              </Heading>
              <Text fontSize="lg" color="gray.600">
                At Lakshmi Sumati, we promise to provide:
              </Text>
              <VStack align={{ base: 'center', md: 'flex-start' }} spacing={2}>
                <Text fontSize="lg" color="gray.700">• Genuine products with manufacturer warranty</Text>
                <Text fontSize="lg" color="gray.700">• Transparent pricing with no hidden costs</Text>
                <Text fontSize="lg" color="gray.700">• Expert guidance for your purchase decisions</Text>
                <Text fontSize="lg" color="gray.700">• Reliable after-sales service and support</Text>
                <Text fontSize="lg" color="gray.700">• Quality that stands the test of time</Text>
              </VStack>
            </VStack>
            
            <Box 
              maxW={{ base: 'full', md: '35%' }}
              borderRadius="full"
              overflow="hidden"
              boxShadow="md"
            >
              <Image
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Customer Satisfaction"
                w="300px"
                h="300px"
                objectFit="cover"
                borderRadius="full"
                fallbackSrc="https://via.placeholder.com/300x300?text=Our+Promise"
              />
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
