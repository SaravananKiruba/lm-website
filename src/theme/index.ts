import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    primary: '#3182CE', // Blue
    secondary: '#718096', // Gray
    accent: '#2C5282', // Dark Blue
    light: '#EDF2F7', // Light Gray
    dark: '#1A365D', // Very Dark Blue
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
