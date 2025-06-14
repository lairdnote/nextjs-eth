'use client'

import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Link,
  Icon,
} from '@chakra-ui/react'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

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
          <Link href={'#'}>隐私政策</Link>
          <Link href={'#'}>使用条款</Link>
          <Link href={'#'}>联系我们</Link>
        </Stack>
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'}>
            <Icon as={FaGithub} w={6} h={6} />
          </Link>
          <Link href={'#'}>
            <Icon as={FaTwitter} w={6} h={6} />
          </Link>
          <Link href={'#'}>
            <Icon as={FaLinkedin} w={6} h={6} />
          </Link>
        </Stack>
      </Container>
    </Box>
  )
} 