import React from 'react';
import { Box, Flex, Heading, Text, Image, Button, Link } from '@chakra-ui/react';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface BrandProps {
  id: number;
  name: string;
  logo: string;
  description: string;
  catalogLink: string;
}

const MotionBox = motion(Box);

const BrandCard: React.FC<BrandProps> = ({ name, logo, description, catalogLink }) => {
  return (
    <MotionBox
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      boxShadow="md"
      p={6}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <Flex direction="column" align="center">
        <Image
          src={logo}
          alt={`${name} logo`}
          height="100px"
          objectFit="contain"
          mb={4}
          fallbackSrc={`https://via.placeholder.com/200x100?text=${name}`}
        />
        
        <Heading as="h3" size="md" textAlign="center" mb={3}>
          {name}
        </Heading>
        
        <Text textAlign="center" color="gray.600" mb={4}>
          {description}
        </Text>
        
        <Button
          as={Link}
          href={catalogLink}
          isExternal
          rightIcon={<FaDownload />}
          colorScheme="blue"
          variant="outline"
          size="sm"
          _hover={{ textDecoration: 'none', bg: 'brand.light' }}
        >
          View Catalog
        </Button>
      </Flex>
    </MotionBox>
  );
};

export default BrandCard;
