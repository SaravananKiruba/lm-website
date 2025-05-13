import React, { useState, useMemo } from 'react';
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
  IconProps,
  useToast
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilter, FaSearch } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';

const MotionBox = motion(Box);
const MotionSimpleGrid = motion(SimpleGrid);

const OwnProducts: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState('');
  const [priceSort, setPriceSort] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const toast = useToast();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  // Get filtered and sorted products based on current state
  const getFilteredProducts = (productList: typeof PRODUCTS.furniture) => {
    return productList
      .filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (priceSort === 'low') {
          // Handle price strings - convert "₹" number strings to numbers for sorting
          const aPrice = a.priceInfo.includes('₹') 
            ? parseInt(a.priceInfo.replace(/[^\d]/g, '')) 
            : 0;
          const bPrice = b.priceInfo.includes('₹') 
            ? parseInt(b.priceInfo.replace(/[^\d]/g, '')) 
            : 0;
          return aPrice - bPrice;
        } else if (priceSort === 'high') {
          const aPrice = a.priceInfo.includes('₹') 
            ? parseInt(a.priceInfo.replace(/[^\d]/g, '')) 
            : 0;
          const bPrice = b.priceInfo.includes('₹') 
            ? parseInt(b.priceInfo.replace(/[^\d]/g, '')) 
            : 0;
          return bPrice - aPrice;
        }
        return 0;
      });
  };
  
  // Memoize the filtered products to avoid recomputation on every render
  const filteredFurniture = useMemo(() => 
    getFilteredProducts(PRODUCTS.furniture), 
    [searchTerm, priceSort]
  );
  
  const filteredAppliances = useMemo(() => 
    getFilteredProducts(PRODUCTS.appliances), 
    [searchTerm, priceSort]
  );
  
  const filteredAllProducts = useMemo(() => 
    getFilteredProducts([...PRODUCTS.furniture, ...PRODUCTS.appliances]), 
    [searchTerm, priceSort]
  );
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
        {/* Mobile Filter Button */}
        <Flex justify="space-between" align="center" mb={6} display={{ base: 'flex', md: 'none' }}>
          <Button 
            onClick={onOpen} 
            variant="outline" 
            leftIcon={<Icon as={FaFilter as React.FC<IconProps>} />}
            _hover={{ bg: 'brand.light' }}
          >
            Filters
          </Button>
          <ChakraSelect 
            placeholder="Sort by"
            maxW="150px" 
            value={priceSort}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPriceSort(e.target.value)}
          >
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </ChakraSelect>
        </Flex>

        {/* Mobile Filter Drawer */}
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px" display="flex" justifyContent="space-between">
              <Text>Filters</Text>
              <CloseButton onClick={onClose} />
            </DrawerHeader>
            <DrawerBody>
              <VStack gap={6} align="stretch" my={4}>                <Box>
                  <Text fontWeight="medium" mb={2}>Search</Text>
                  <Flex position="relative">
                    <Input 
                      placeholder="Search products" 
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                    <Icon 
                      as={FaSearch as React.FC<IconProps>} 
                      position="absolute" 
                      right="12px" 
                      top="50%" 
                      transform="translateY(-50%)" 
                      color="gray.400"
                    />
                  </Flex>
                </Box>
                <Box>
                  <Text fontWeight="medium" mb={2}>Sort by</Text>
                  <ChakraSelect 
                    placeholder="Sort by"
                    value={priceSort}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPriceSort(e.target.value)}
                  >
                    <option value="low">Price: Low to High</option>
                    <option value="high">Price: High to Low</option>
                  </ChakraSelect>
                </Box>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>        {/* Desktop Filter */}
        <Flex display={{ base: 'none', md: 'flex' }} justify="space-between" align="center" mb={8}>
          <Box position="relative" maxW="300px">
            <Flex position="relative">
              <Input 
                placeholder="Search products..." 
                value={searchTerm}
                onChange={handleSearch}
                pr="40px"
              />
              <Icon 
                as={FaSearch as React.FC<IconProps>} 
                position="absolute" 
                right="12px" 
                top="50%" 
                transform="translateY(-50%)" 
                color="gray.400"
              />
            </Flex>
          </Box>
          <ChakraSelect 
            placeholder="Sort by"
            maxW="200px"
            value={priceSort}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPriceSort(e.target.value)}
          >
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </ChakraSelect>
        </Flex>

        <ChakraTabs 
          variant="enclosed" 
          colorScheme="red"
          onChange={(index) => setActiveTab(index)}
        >
          <ChakraTabList>
            <ChakraTab fontWeight="medium">All Products</ChakraTab>
            <ChakraTab fontWeight="medium">Furniture</ChakraTab>
            <ChakraTab fontWeight="medium">Appliances</ChakraTab>
          </ChakraTabList>
          
          <ChakraTabPanels>
            <ChakraTabPanel p={0} pt={6}>
              <AnimatePresence>
                {filteredAllProducts.length === 0 ? (
                  <MotionBox
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    textAlign="center"
                    py={10}
                  >
                    <Text fontSize="lg">No products found matching your search.</Text>
                    <Button 
                      mt={4} 
                      colorScheme="red" 
                      onClick={() => {
                        setSearchTerm('');
                        setPriceSort('');
                      }}
                    >
                      Clear Filters
                    </Button>
                  </MotionBox>
                ) : (
                  <MotionSimpleGrid
                    columns={{ base: 1, sm: 2, lg: 3 }}
                    gap={8}
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { 
                        transition: { staggerChildren: 0.1 }
                      },
                      hidden: {}
                    }}
                  >
                    {filteredAllProducts.map(product => (
                      <Box
                        key={product.id}
                        as={motion.div}
                        variants={{
                          hidden: { y: 20, opacity: 0 },
                          visible: { y: 0, opacity: 1, transition: { duration: 0.4 } }
                        }}
                      >
                        <ProductCard {...product} />
                      </Box>
                    ))}
                  </MotionSimpleGrid>
                )}
              </AnimatePresence>
            </ChakraTabPanel>
            
            <ChakraTabPanel p={0} pt={6}>
              <AnimatePresence>
                {filteredFurniture.length === 0 ? (
                  <MotionBox
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    textAlign="center"
                    py={10}
                  >
                    <Text fontSize="lg">No furniture products found matching your search.</Text>
                    <Button 
                      mt={4} 
                      colorScheme="red" 
                      onClick={() => {
                        setSearchTerm('');
                        setPriceSort('');
                      }}
                    >
                      Clear Filters
                    </Button>
                  </MotionBox>
                ) : (
                  <MotionSimpleGrid
                    columns={{ base: 1, sm: 2, lg: 3 }}
                    gap={8}
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { 
                        transition: { staggerChildren: 0.1 }
                      },
                      hidden: {}
                    }}
                  >
                    {filteredFurniture.map(product => (
                      <Box
                        key={product.id}
                        as={motion.div}
                        variants={{
                          hidden: { y: 20, opacity: 0 },
                          visible: { y: 0, opacity: 1, transition: { duration: 0.4 } }
                        }}
                      >
                        <ProductCard {...product} />
                      </Box>
                    ))}
                  </MotionSimpleGrid>
                )}
              </AnimatePresence>
            </ChakraTabPanel>
            
            <ChakraTabPanel p={0} pt={6}>
              <AnimatePresence>
                {filteredAppliances.length === 0 ? (
                  <MotionBox
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    textAlign="center"
                    py={10}
                  >
                    <Text fontSize="lg">No appliance products found matching your search.</Text>
                    <Button 
                      mt={4} 
                      colorScheme="red" 
                      onClick={() => {
                        setSearchTerm('');
                        setPriceSort('');
                      }}
                    >
                      Clear Filters
                    </Button>
                  </MotionBox>
                ) : (
                  <MotionSimpleGrid
                    columns={{ base: 1, sm: 2, lg: 3 }}
                    gap={8}
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { 
                        transition: { staggerChildren: 0.1 }
                      },
                      hidden: {}
                    }}
                  >
                    {filteredAppliances.map(product => (
                      <Box
                        key={product.id}
                        as={motion.div}
                        variants={{
                          hidden: { y: 20, opacity: 0 },
                          visible: { y: 0, opacity: 1, transition: { duration: 0.4 } }
                        }}
                      >
                        <ProductCard {...product} />
                      </Box>
                    ))}
                  </MotionSimpleGrid>
                )}
              </AnimatePresence>
            </ChakraTabPanel>
          </ChakraTabPanels>
        </ChakraTabs>
      </Container>
    </Box>
  );
};

export default OwnProducts;
