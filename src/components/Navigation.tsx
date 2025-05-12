import React from 'react';
import { Box, Flex, Link, Text, Icon, IconProps } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaBuilding, FaPhone, FaInfoCircle } from 'react-icons/fa';

interface NavLinkProps {
  icon: React.ReactElement;
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ icon, to, children, isActive }) => {
  return (
    <Link
      as={RouterLink}
      to={to}
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      color={isActive ? 'brand.primary' : 'gray.600'}
      fontWeight={isActive ? 'bold' : 'normal'}
      _hover={{ color: 'brand.primary', textDecoration: 'none' }}
      mx={{ base: 1, md: 2 }}
      px={{ base: 1, md: 3 }}
      py={2}
    >
      <Box fontSize={{ base: 'lg', md: 'xl' }} mb={1}>
        {icon}
      </Box>
      <Text fontSize={{ base: 'xs', md: 'sm' }}>{children}</Text>
    </Link>
  );
};

interface Props {
  currentPath: string;
}

const Navigation: React.FC<Props> = ({ currentPath }) => {
  return (
    <Flex
      as="nav"
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      bg="white"
      boxShadow="0 -2px 10px rgba(0, 0, 0, 0.1)"
      justifyContent="space-around"
      py={2}
      zIndex={10}
      display={{ base: 'flex', md: 'none' }}
    >      <NavLink to="/" icon={<Icon as={FaHome as React.FC<IconProps>} />} isActive={currentPath === '/'}>
        Home
      </NavLink>      <NavLink to="/own-products" icon={<Icon as={FaShoppingCart as React.FC<IconProps>} />} isActive={currentPath === '/own-products'}>
        Our Products
      </NavLink>      <NavLink to="/dealership" icon={<Icon as={FaBuilding as React.FC<IconProps>} />} isActive={currentPath === '/dealership'}>
        Dealership
      </NavLink>      <NavLink to="/about" icon={<Icon as={FaInfoCircle as React.FC<IconProps>} />} isActive={currentPath === '/about'}>
        About
      </NavLink>      <NavLink to="/contact" icon={<Icon as={FaPhone as React.FC<IconProps>} />} isActive={currentPath === '/contact'}>
        Contact
      </NavLink>
    </Flex>
  );
};

export default Navigation;
