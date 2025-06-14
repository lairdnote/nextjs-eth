'use client'

import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      mt="auto"
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© 2024 Your Company. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <Text>隐私政策</Text>
          <Text>使用条款</Text>
          <Text>联系我们</Text>
        </Stack>
      </Container>
    </Box>
  )
} 