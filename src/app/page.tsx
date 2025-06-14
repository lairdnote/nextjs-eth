'use client'

import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Chakra UI
          </Heading>
          <Text fontSize="xl">
            This is a sample page using Chakra UI components.
          </Text>
        </Box>
      </VStack>
    </Container>
  )
}