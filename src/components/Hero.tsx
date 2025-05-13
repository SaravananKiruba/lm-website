import React from 'react';
import { Box, Button, Container, Flex, Heading, Text, VStack, Icon, IconProps, useBreakpointValue } from '@chakra-ui/react';
import { FaArrowRight, FaChair, FaLightbulb, FaTv, FaBlender } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionButton = motion(Button);
const MotionIcon = motion(Icon);

const Hero: React.FC = () => {
  const controls = useAnimation();
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Start animations when component mounts
  React.useEffect(() => {
    controls.start('visible');
  }, [controls]);

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
            <MotionHeading
              as="h1" 
              size="2xl" 
              fontWeight="bold" 
              lineHeight="shorter" 
              color="brand.dark"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.7, ease: "easeOut" }
                }
              }}
            >
              Quality Home Appliances & Furniture
            </MotionHeading>
            
            <MotionText
              fontSize={{ base: 'lg', md: 'xl' }} 
              color="gray.600"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.7, delay: 0.2, ease: "easeOut" }
                }
              }}
            >
              Your trusted dealer for premium brands and custom furniture solutions in Madurai since 1995.
            </MotionText>
            
            <Flex 
              direction={{ base: 'column', sm: 'row' }} 
              gap={4} 
              w="full" 
              justify={{ base: 'center', md: 'flex-start' }}
              as={motion.div}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.7, delay: 0.4, ease: "easeOut" }
                }
              }}
            >
              <MotionButton 
                as={RouterLink} 
                to="/own-products" 
                colorScheme="red" 
                size="lg" 
                rightIcon={<Icon as={FaArrowRight as React.FC<IconProps>} />}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Explore Products
              </MotionButton>
              <MotionButton 
                as={RouterLink} 
                to="/contact" 
                variant="outline" 
                size="lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Contact Us
              </MotionButton>
            </Flex>
          </VStack>
          
          {/* Floating product icons on right side (visible on larger screens) */}
          {!isMobile && (
            <MotionFlex
              position="relative"
              h="400px"
              w="400px"
              display={{ base: 'none', md: 'flex' }}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.5 } }
              }}
            >
              <MotionBox
                position="absolute"
                top="50px"
                left="20px"
                variants={{
                  hidden: { y: 50, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.7 } }
                }}
                animate={{
                  y: [0, -15, 0],
                  transition: { repeat: Infinity, duration: 3, ease: "easeInOut" }
                }}
              >
                <MotionIcon 
                  as={FaChair as React.FC<IconProps>} 
                  boxSize={16} 
                  color="brand.primary" 
                  opacity={0.8}
                />
              </MotionBox>
              
              <MotionBox
                position="absolute"
                top="120px"
                right="40px"
                variants={{
                  hidden: { y: 50, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.7, delay: 0.2 } }
                }}
                animate={{
                  y: [0, -15, 0],
                  transition: { repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.3 }
                }}
              >
                <MotionIcon 
                  as={FaTv as React.FC<IconProps>} 
                  boxSize={14} 
                  color="brand.primary" 
                  opacity={0.8}
                />
              </MotionBox>
              
              <MotionBox
                position="absolute"
                bottom="100px"
                left="50px"
                variants={{
                  hidden: { y: 50, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.7, delay: 0.4 } }
                }}
                animate={{
                  y: [0, -15, 0],
                  transition: { repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.6 }
                }}
              >
                <MotionIcon 
                  as={FaBlender as React.FC<IconProps>} 
                  boxSize={12} 
                  color="brand.primary" 
                  opacity={0.8}
                />
              </MotionBox>
              
              <MotionBox
                position="absolute"
                bottom="50px"
                right="80px"
                variants={{
                  hidden: { y: 50, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.7, delay: 0.6 } }
                }}
                animate={{
                  y: [0, -15, 0],
                  transition: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.9 }
                }}
              >
                <MotionIcon 
                  as={FaLightbulb as React.FC<IconProps>} 
                  boxSize={10} 
                  color="brand.primary" 
                  opacity={0.8}
                />
              </MotionBox>
            </MotionFlex>
          )}
          
          {/* Decorative elements */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 0.7 }}
            display={{ base: 'none', md: 'block' }}
            width="450px"
            height="450px"
            borderRadius="full"
            bg="brand.primary"
            position="absolute"
            top="-100px"
            right="-100px"
            zIndex={1}
          />
          
          <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            display={{ base: 'none', md: 'block' }}
            width="300px"
            height="300px"
            borderRadius="full"
            bg="brand.accent"
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
