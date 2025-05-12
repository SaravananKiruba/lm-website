import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from './theme';

// Pages
import Home from './pages/Home';
import OwnProducts from './pages/OwnProducts';
import Dealership from './pages/Dealership';
import About from './pages/About';
import Contact from './pages/Contact';

// Components
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Layout wrapper with navigation
const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      <Box flex="1" pb={{ base: 20, md: 0 }}>
        {children}
      </Box>
      <Navigation currentPath={location.pathname} />
      <Footer />
    </Box>
  );
};

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={
            <AppLayout>
              <Home />
            </AppLayout>
          } />
          <Route path="/own-products" element={
            <AppLayout>
              <OwnProducts />
            </AppLayout>
          } />
          <Route path="/dealership" element={
            <AppLayout>
              <Dealership />
            </AppLayout>
          } />
          <Route path="/about" element={
            <AppLayout>
              <About />
            </AppLayout>
          } />
          <Route path="/contact" element={
            <AppLayout>
              <Contact />
            </AppLayout>
          } />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
