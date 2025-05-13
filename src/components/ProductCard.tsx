import React from 'react';
import { Box, Image, Heading, Text, Badge, Flex, Link, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface ProductProps {
  id: number;
  name: string;
  description: string;
  image: string;
  priceInfo: string;
  category: string;
}

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const ProductCard: React.FC<ProductProps> = ({ name, description, image, priceInfo, category }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <MotionBox
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        bg="white"
        whileHover={{ 
          y: -8,
          boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)"
        }}
        transition={{ 
          duration: 0.3,
          ease: "easeOut"
        }}
        position="relative"
        zIndex={1}
      >
        <Box overflow="hidden" height="200px">
          <MotionImage
            src={image}
            alt={name}
            height="100%"
            width="100%"
            objectFit="cover"
            fallbackSrc="https://via.placeholder.com/300x200?text=Product+Image"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
        </Box>

        <Box p={6}>
          <Flex justify="space-between" align="center" mb={2}>
            <Badge 
              colorScheme={category === 'Furniture' ? 'purple' : 'red'} 
              borderRadius="full" 
              px={2}
              py={1}
            >
              {category}
            </Badge>
            <Text 
              color="brand.primary" 
              fontWeight="bold"
              bg="brand.light"
              px={2}
              py={1}
              borderRadius="md"
            >
              {priceInfo}
            </Text>
          </Flex>

          <Heading as="h3" size="md" mb={2} noOfLines={1}>
            {name}
          </Heading>
          
          <Text color="gray.600" noOfLines={2} mb={4}>
            {description}
          </Text>
            <Flex justify="flex-end">
            <Box
              as={motion.div}
              whileHover={{ x: 5 }}
              display="inline-block"
            >
              <Link
                onClick={onOpen}
                color="brand.primary"
                fontWeight="semibold"
                cursor="pointer"
                _hover={{ textDecoration: 'none', color: 'brand.accent' }}
              >
                View Details
              </Link>
            </Box>
          </Flex>
        </Box>
      </MotionBox>

      {/* Product Details Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay backdropFilter="blur(4px)" />
        <ModalContent borderRadius="lg" overflow="hidden">
          <ModalHeader 
            borderBottomWidth="1px" 
            borderColor="gray.100"
            bg="brand.light"
          >
            {name}
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody p={0}>
            <Flex direction={{ base: 'column', md: 'row' }}>
              <Image
                src={image}
                alt={name}
                objectFit="cover"
                maxH={{ base: "200px", md: "300px" }}
                w={{ base: "100%", md: "40%" }}
                fallbackSrc="https://via.placeholder.com/300x300?text=Product+Image"
              />
              <VStack p={6} align="start" spacing={4} w={{ base: "100%", md: "60%" }}>
                <Badge 
                  colorScheme={category === 'Furniture' ? 'purple' : 'red'} 
                  borderRadius="full" 
                  px={2}
                  py={1}
                  fontSize="sm"
                >
                  {category}
                </Badge>
                <Text fontSize="xl" fontWeight="bold" color="brand.primary">
                  {priceInfo}
                </Text>
                <Text color="gray.700">
                  {description}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Product ID: {Math.floor(Math.random() * 100000) + 100000}
                </Text>
                <Button 
                  mt={4} 
                  colorScheme="red" 
                  size="md" 
                  width="full"
                  onClick={() => {
                    onClose();
                  }}
                >
                  Contact for Details
                </Button>
              </VStack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductCard;
