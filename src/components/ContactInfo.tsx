import React from 'react';
import { Box, VStack, Heading, Text, HStack, Icon, Link, Button, IconProps } from '@chakra-ui/react';
import { FaMapMarkerAlt, FaPhone, FaMobile, FaWhatsapp, FaClock } from 'react-icons/fa';
import { CONTACT_INFO } from '../constants';
import { getPhoneLink, getWhatsAppLink } from '../utils/helpers';

const ContactInfo: React.FC = () => {
  return (
    <Box>
      <VStack spacing={6} align="stretch">
        <Heading as="h3" size="md" mb={2}>
          Contact Information
        </Heading>
        
        <VStack align="start" spacing={4}>          <HStack spacing={3}>
            <Icon as={FaMapMarkerAlt as React.FC<IconProps>} color="brand.primary" boxSize={5} />
            <Text>{CONTACT_INFO.address}</Text>
          </HStack>
            <HStack spacing={3}>
            <Icon as={FaPhone as React.FC<IconProps>} color="brand.primary" boxSize={5} />
            <Link href={getPhoneLink(CONTACT_INFO.phone)}>
              <Text>{CONTACT_INFO.phone}</Text>
            </Link>
          </HStack>
            <HStack spacing={3}>
            <Icon as={FaMobile as React.FC<IconProps>} color="brand.primary" boxSize={5} />
            <VStack align="start" spacing={1}>
              <Link href={getPhoneLink(CONTACT_INFO.mobile1)}>
                <Text>{CONTACT_INFO.mobile1}</Text>
              </Link>
              <Link href={getPhoneLink(CONTACT_INFO.mobile2)}>
                <Text>{CONTACT_INFO.mobile2}</Text>
              </Link>
            </VStack>
          </HStack>
            <HStack spacing={3}>
            <Icon as={FaWhatsapp as React.FC<IconProps>} color="brand.primary" boxSize={5} />
            <Text>{CONTACT_INFO.whatsapp}</Text>
            <Button 
              as={Link} 
              href={getWhatsAppLink(CONTACT_INFO.whatsapp, "Hello! I'm interested in your products.")} 
              size="sm"              colorScheme="red" 
              isExternal
              _hover={{ textDecoration: 'none' }}
            >
              Chat Now
            </Button>
          </HStack>
            <HStack spacing={3} align="flex-start">
            <Icon as={FaClock as React.FC<IconProps>} color="brand.primary" boxSize={5} mt={1} />
            <VStack align="start" spacing={1}>
              <Text fontWeight="medium">Business Hours:</Text>
              <Text>Weekdays: {CONTACT_INFO.businessHours.weekdays}</Text>
              <Text>Weekends: {CONTACT_INFO.businessHours.weekends}</Text>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default ContactInfo;
