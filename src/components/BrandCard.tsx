import React from 'react';
import { Box, Flex, Heading, Text, Image, Button, Link, Icon } from '@chakra-ui/react';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface BrandProps {
  id: number;
  name: string;
  logo: string;
  description: string;
  catalogLink: string;
}

// Create a custom download icon component that works with React 19
const DownloadIcon = (props: any) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
    </svg>
  );
};

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
        </Text>          <Button
          as={Link}
          href={catalogLink}
          isExternal
          rightIcon={<DownloadIcon />}
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
