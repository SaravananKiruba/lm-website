import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    primary: '#8c0707', // Dark Red
    secondary: '#32097d', // Deep Purple
    accent: '#d31638', // Bright Red
    light: '#fefefe', // White
    dark: '#ab3946', // Rose Red
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
