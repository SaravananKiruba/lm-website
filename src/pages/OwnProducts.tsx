import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  SimpleGrid, 
  Text, 
  VStack, 
  Button, 
  Flex, 
  useDisclosure, 
  Drawer, 
  DrawerContent, 
  DrawerHeader, 
  DrawerBody, 
  CloseButton, 
  Input,
  Tabs as ChakraTabs,
  TabList as ChakraTabList,
  Tab as ChakraTab,
  TabPanel as ChakraTabPanel,
  TabPanels as ChakraTabPanels,
  Select as ChakraSelect,
  Icon,
  IconProps
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaFilter } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';

const MotionBox = motion(Box);

const OwnProducts: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState('');
  const [priceSort, setPriceSort] = useState('');

  // This would be connected to real filtering logic in a real app
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

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
            <VStack gap={3} textAlign="center">
              <Heading as="h1" size="2xl" color="brand.dark">
                Our Products
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="700px">
                Discover our collection of quality furniture and home appliances
              </Text>
            </VStack>
          </MotionBox>
        </Container>
      </Box>

      <Container maxW="1200px" pb={16}>
        {/* Mobile Filter Button */}        <Flex justify="space-between" align="center" mb={6} display={{ base: 'flex', md: 'none' }}>          <Button onClick={onOpen} variant="outline">
            <Icon as={FaFilter as React.FC<IconProps>} mr={2} /> Filters
          </Button>          <ChakraSelect 
            placeholder="Sort by"
            maxW="150px" 
            value={priceSort}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPriceSort(e.target.value)}
          >
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </ChakraSelect>
        </Flex>

        {/* Mobile Filter Drawer */}        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px" display="flex" justifyContent="space-between">
              <Text>Filters</Text>
              <CloseButton onClick={onClose} />
            </DrawerHeader>
            <DrawerBody>
              <VStack gap={6} align="stretch" my={4}>
                <Box>
                  <Text fontWeight="medium" mb={2}>Search</Text>
                  <Input 
                    placeholder="Search products" 
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </Box>
                <Box>
                  <Text fontWeight="medium" mb={2}>Sort by</Text>                  <ChakraSelect 
                    placeholder="Sort by"
                    value={priceSort}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPriceSort(e.target.value)}
                  >
                    <option value="low">Price: Low to High</option>
                    <option value="high">Price: High to Low</option>
                  </ChakraSelect>
                </Box>
                {/* More filters would go here in a real application */}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        {/* Desktop Filter */}
        <Flex display={{ base: 'none', md: 'flex' }} justify="space-between" align="center" mb={8}>
          <Input 
            placeholder="Search products..." 
            value={searchTerm}
            onChange={handleSearch}
            maxW="300px"
          />          <ChakraSelect 
            placeholder="Sort by"
            maxW="200px"
            value={priceSort}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPriceSort(e.target.value)}
          >
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </ChakraSelect>
        </Flex>        <ChakraTabs variant="enclosed" colorScheme="red">
          <ChakraTabList>
            <ChakraTab fontWeight="medium">All Products</ChakraTab>
            <ChakraTab fontWeight="medium">Furniture</ChakraTab>
            <ChakraTab fontWeight="medium">Appliances</ChakraTab>
          </ChakraTabList>
          
          <ChakraTabPanels>            <ChakraTabPanel p={0} pt={6}>
              <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={8}>
                {[...PRODUCTS.furniture, ...PRODUCTS.appliances].map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </SimpleGrid>
            </ChakraTabPanel>
            
            <ChakraTabPanel p={0} pt={6}>
              <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={8}>
                {PRODUCTS.furniture.map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </SimpleGrid>
            </ChakraTabPanel>
            
            <ChakraTabPanel p={0} pt={6}>
              <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={8}>
                {PRODUCTS.appliances.map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </SimpleGrid>
            </ChakraTabPanel>
          </ChakraTabPanels>
        </ChakraTabs>
      </Container>
    </Box>
  );
};

export default OwnProducts;
