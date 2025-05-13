import React from 'react';
import { Box, Flex, Heading, Text, Image, Button, Link, Icon, IconProps } from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface BrandProps {
  id: number;
  name: string;
  logo: string;
  description: string;
  catalogLink: string;
}

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionImage = motion(Image);
const MotionButton = motion(Button);

const BrandCard: React.FC<BrandProps> = ({ name, logo, description, catalogLink }) => {
  return (
    <MotionBox
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      boxShadow="md"
      p={6}
      whileHover={{ 
        y: -10, 
        boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" 
      }}
      transition={{ 
        duration: 0.3,
        ease: "easeOut"
      }}
    >
      <MotionFlex direction="column" align="center">
        <MotionImage
          src={logo}
          alt={`${name} logo`}
          height="100px"
          objectFit="contain"
          mb={4}
          fallbackSrc={`https://via.placeholder.com/200x100?text=${name}`}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        
        <Heading as="h3" size="md" textAlign="center" mb={3}>
          {name}
        </Heading>
        
        <Text textAlign="center" color="gray.600" mb={4}>
          {description}
        </Text>
          
        <MotionButton
          as={Link}
          href={catalogLink}
          isExternal
          rightIcon={<Icon as={FaExternalLinkAlt as React.FC<IconProps>} />}
          colorScheme="red"
          variant="outline"
          size="sm"
          _hover={{ textDecoration: 'none', bg: 'brand.light' }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          View Catalog
        </MotionButton>
      </MotionFlex>
    </MotionBox>  );
};

export default BrandCard;
