import React, { useState } from 'react';
import { Box, Container, Heading, Text, VStack, SimpleGrid, FormControl, FormLabel, Input, Textarea, Button, useToast, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ContactInfo from '../components/ContactInfo';
import { CONTACT_INFO } from '../constants';

const MotionBox = motion(Box);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: 'Message sent!',
        description: "We've received your message and will contact you soon.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 1500);
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
            <VStack spacing={3} textAlign="center">
              <Heading as="h1" size="2xl" color="brand.dark">
                Contact Us
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="700px">
                Get in touch with us for inquiries, support, or to visit our showroom
              </Text>
            </VStack>
          </MotionBox>
        </Container>
      </Box>

      <Container maxW="1200px" pb={16}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {/* Contact Information */}
          <Box>
            <ContactInfo />
            
            {/* Google Map */}
            <Box mt={8} borderRadius="md" overflow="hidden" boxShadow="md" height="400px">
              <iframe 
                src={CONTACT_INFO.googleMapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                title="Lakshmi Mahendra Google Map Location" 
              />
            </Box>
          </Box>
          
          {/* Contact Form */}
          <Box>
            <VStack spacing={6} align="stretch">
              <Heading as="h3" size="md" mb={2}>
                Send us a Message
              </Heading>
              
              <Box as="form" onSubmit={handleSubmit} bg="white" p={6} borderRadius="lg" boxShadow="md">
                <VStack spacing={4}>
                  <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      focusBorderColor="brand.primary"
                    />
                  </FormControl>
                  
                  <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      focusBorderColor="brand.primary"
                    />
                  </FormControl>
                  
                  <FormControl id="phone">
                    <FormLabel>Phone Number</FormLabel>
                    <Input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      focusBorderColor="brand.primary"
                    />
                  </FormControl>
                  
                  <FormControl id="message" isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      focusBorderColor="brand.primary"
                      rows={5}
                    />
                  </FormControl>
                  
                  <Button 
                    type="submit" 
                    colorScheme="blue" 
                    size="lg" 
                    width="full"
                    isLoading={isSubmitting}
                    loadingText="Sending..."
                  >
                    Send Message
                  </Button>
                </VStack>
              </Box>
              
              <Box p={4} bg="brand.light" borderRadius="md">
                <Flex align="center">
                  <Text>
                    <Text as="span" fontWeight="bold">Showroom Hours:</Text> {CONTACT_INFO.businessHours.weekdays} (Mon-Fri), {CONTACT_INFO.businessHours.weekends} (Sat-Sun)
                  </Text>
                </Flex>
              </Box>
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Contact;
