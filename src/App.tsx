import React from 'react';
import {Box,Avatar,Container,Flex,Heading,Text,VStack,Wrap,WrapItem,SimpleGrid,Fade,HStack,Icon} 
from '@chakra-ui/react';
import Typist from 'react-typist';
import { StarIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import './stars.css'




const renderStars = (count: number) => {
  const stars = [];

  for (let i = 0; i < count; i++) {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const size = Math.random() * 4;
    const animationDelay = Math.random() * 2;

    stars.push(
      <div
        key={i}
        className="star"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDelay: `${animationDelay}s`,
        }}
      />
    );
  }

  return stars;
};



const App: React.FC = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);

  const handleTypingDone = () => {
    setShowSubtitle(true);
  };


  return (
    
    <Box>
      <Box bg="black" color="white" minHeight="100vh" marginTop={0} paddingTop={0}>
        <Container maxW="container.xl">
          <Flex justifyContent="space-between" alignItems="center" py={8}>
      
          {/*<Avatar size="xl" src="https://twitter.com/gartherly/photo" />*/}
        

            {/* Navigation */}
            <Flex as="nav" gap={8}>
              <Text>Navigation is overated ⌐◨-◨</Text>
            </Flex>
          </Flex>

 {/* Main Content */}
 <VStack justifyContent="center" minHeight="calc(100vh - 64px)" spacing={4}>
        <Typist cursor={{ show: false }} onTypingDone={handleTypingDone}>
          <Heading as="h2" size="2xl" mb={4} fontFamily="'Archivo Narrow', sans-serif" fontWeight="bold">
            Hello 👋 thanks for coming by.
          </Heading>
        </Typist>
        <Fade in={showSubtitle}>
          <Text fontSize="xl" textAlign="center">
            I am Garth, a Web2 veteran navigating his way
            <br />
            through the blockchain by experimenting with Web3,
            <br />
            AI, and other emerging technologies. <br />  <br /> 
            AMA
          </Text>
          <Box mt={4}>
            <HStack spacing={4} justifyContent="center">
              <a href="https://twitter.com/gartherly" target="_blank" rel="noopener noreferrer">
                <Icon as={FaTwitter} boxSize={6} color="white" />
              </a>
              <a href="https://linkedin.com/in/garthlyerly" target="_blank" rel="noopener noreferrer">
                <Icon as={FaLinkedin} boxSize={6} color="white" />
              </a>
          
            </HStack>
            </Box>
        </Fade>
      </VStack>
      {renderStars(200)}
</Container>
</Box>



{/* Comment out Second section */}
{/*
<Box py={20} w="100%" bg="black">
  <Container maxW="container.xl">
    <VStack alignItems="center" spacing={10}>
      <Heading as="h2" size="2xl" color="white" fontFamily="'Archivo Narrow', sans-serif" fontWeight="bold">
        Mission Control
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {cardContent.map(({ title, body }) => (
          <Box
            key={title}
            borderRadius="md"
            borderWidth="1px"
            p={6}
            boxShadow="lg"
            _hover={{ boxShadow: 'xl', transform: 'translateY(-4px)' }}
            backgroundColor="rgba(255, 255, 255, 0.1)"
            backdropFilter="blur(10px)"
            border="1px solid rgba(255, 255, 255, 0.2)"
            transition="all 0.2s ease-in-out"
          >
            <VStack alignItems="left" spacing={4}>
              <Heading as="h3" size="lg" color="white">
                {title}
              </Heading>
              <Text color="white">
                {body}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  </Container>
</Box>
*/}

{/* Comment out Third section */}
{/*
<Box bg="black" color="white" py={20}>
  <Container maxW="container.xl">
    <VStack alignItems="center" spacing={10}>
      <Heading as="h2" size="2xl">
        Brands, Platforms and Agencies
      </Heading>
      <Text fontSize="xl" textAlign="center">
        Building with the best
      </Text>
      <LogoBlock />
    </VStack>
  </Container>
</Box>
*/}

     {/* Comment out Fourth section */}
{/*
<Box bg="black" color="white" py={20}>
  <Container maxW="container.xl">
    <VStack alignItems="start" spacing={10}>
      <Heading as="h2" size="2xl">
        Our Clients
      </Heading>
      <Wrap spacing={8} justify="center">
        {/* Client 1 * /}
        <WrapItem>
          <VStack alignItems="center" spacing={4}>
            <StarIcon boxSize={16} color="white" />
            <Heading as="h3" size="lg">
              Client 1
            </Heading>
            <Text>Description of Client 1</Text>
          </VStack>
        </WrapItem>
        {/* Client 2 * /}
        <WrapItem>
          <VStack alignItems="center" spacing={4}>
            <StarIcon boxSize={16} color="white" />
            <Heading as="h3" size="lg">
              Client 2
            </Heading>
            <Text>Description of Client 2</Text>
          </VStack>
        </WrapItem>
        {/* Client 3 * /}
        <WrapItem>
          <VStack alignItems="center" spacing={4}>
            <StarIcon boxSize={16} color="white" />
            <Heading as="h3" size="lg">
              Client 3
            </Heading>
            <Text>Description of Client 3</Text>
          </VStack>
        </WrapItem>
        {/* Client 4 * /}
        <WrapItem>
          <VStack alignItems="center" spacing={4}>
            <StarIcon boxSize={16} color="white" />
            <Heading as="h3" size="lg">
              Client 4
            </Heading>
            <Text>Description of Client 4</Text>
          </VStack>
        </WrapItem>
      </Wrap>
    </VStack>
  </Container>
</Box>
*/}
  </Box>
  );
};

export default App;
