import { Box, Flex, Heading, Text, Button, Image, VStack, HStack, Spacer, Container, Link } from "@chakra-ui/react";
import { FaTicketAlt, FaMusic, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" minH="70vh" bg="gray.800" color="white" p={8}>
        <VStack align="flex-start" spacing={5} maxW="lg" p={5}>
          <Heading as="h1" size="3xl">
            The Rockers
          </Heading>
          <Text fontSize="xl">Join us on our world tour and experience the thundering sound of rock and roll!</Text>
          <Button leftIcon={<FaTicketAlt />} colorScheme="red" size="lg">
            Get Tickets
          </Button>
        </VStack>
        <Spacer />
        <Image borderRadius="full" boxSize={{ base: "300px", md: "400px" }} src="https://placehold.co/600x400" alt="The Rockers on stage" p={5} />
      </Flex>

      {/* About Section */}
      <Container maxW="container.xl" p={8}>
        <VStack spacing={5} align="flex-start" py={10}>
          <Heading as="h2" size="2xl">
            About The Band
          </Heading>
          <Text fontSize="lg">Formed in 2001, The Rockers have been electrifying audiences worldwide with their iconic sound and high-energy performances. Don't miss your chance to see them live!</Text>
        </VStack>
      </Container>

      {/* Tour Dates Section */}
      <Box bg="gray.100" py={10}>
        <Container maxW="container.xl">
          <VStack spacing={5} align="flex-start">
            <Heading as="h3" size="xl">
              Tour Dates
            </Heading>
            {/* List of tour dates would go here */}
            {/* Example entry */}
            <HStack spacing={5} p={5} bg="white" w="full" borderRadius="md" boxShadow="md">
              <Box>
                <Text fontWeight="bold">May 5, 2023</Text>
                <Text color="gray.600">Los Angeles, CA</Text>
              </Box>
              <Spacer />
              <Button leftIcon={<FaMusic />} colorScheme="red">
                Details
              </Button>
            </HStack>
            {/* More entries... */}
          </VStack>
        </Container>
      </Box>

      {/* Social Media Section */}
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" bg="gray.800" color="white" py={8}>
        <Text fontSize="lg" p={5}>
          Follow us on social media for the latest updates!
        </Text>
        <HStack spacing={5}>
          <Link href="#" isExternal>
            <FaInstagram size="2em" />
          </Link>
          <Link href="#" isExternal>
            <FaTwitter size="2em" />
          </Link>
          <Link href="#" isExternal>
            <FaFacebookF size="2em" />
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Index;
