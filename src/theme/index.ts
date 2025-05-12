import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    primary: '#1075f0', // Deep Blue
    secondary: '#d31638', // Bright Red
    accent: '#d31638', // White
    light: '#fefefe', // White
    dark: '#d31638', // Deep Blue
  },
};

const fonts = {
  heading: '"Poppins", sans-serif',
  body: '"Open Sans", sans-serif',
};

const theme = extendTheme({
  colors,
  fonts,
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.800',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'md',
      },
      variants: {
        solid: {
          bg: 'brand.primary',
          color: 'white',
          _hover: {
            bg: 'brand.accent',
          },
        },
        outline: {
          borderColor: 'brand.primary',
          color: 'brand.primary',
          _hover: {
            bg: 'brand.light',
          },
        },
      },
    },
  },
});

export default theme;
