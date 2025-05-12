import React from 'react';
import { Box, Image, Heading, Text, Badge, Flex, Link } from '@chakra-ui/react';
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

const ProductCard: React.FC<ProductProps> = ({ name, description, image, priceInfo, category }) => {
  return (
    <MotionBox
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg="white"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={image}
        alt={name}
        height="200px"
        width="100%"
        objectFit="cover"
        fallbackSrc="https://via.placeholder.com/300x200?text=Product+Image"
      />

      <Box p={6}>
        <Flex justify="space-between" align="center" mb={2}>          <Badge colorScheme={category === 'Furniture' ? 'purple' : 'red'} borderRadius="full" px={2}>
            {category}
          </Badge>
          <Text color="brand.primary" fontWeight="bold">
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
          <Link
            href="#" 
            color="brand.primary"
            fontWeight="semibold"
            _hover={{ textDecoration: 'none', color: 'brand.accent' }}
          >
            View Details
          </Link>
        </Flex>
      </Box>
    </MotionBox>
  );
};

export default ProductCard;
