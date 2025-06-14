'use client'

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import Link from 'next/link'

const Links = [
  { name: '首页', href: '/' },
  { name: '关于', href: '/about' },
  { name: '服务', href: '/services' },
  { name: '联系我们', href: '/contact' },
]

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Link href="/">
            <Box
              borderRadius="full"
              overflow="hidden"
              boxSize="40px"
              border="2px solid"
              borderColor={useColorModeValue('gray.200', 'gray.700')}
              _hover={{
                transform: 'scale(1.05)',
                transition: 'all 0.2s ease-in-out',
              }}
            >
              <Image
                src="/logo.png"
                alt="Logo"
                w="100%"
                h="100%"
                objectFit="cover"
                cursor="pointer"
              />
            </Box>
          </Link>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <Link key={link.name} href={link.href}>
                <Button variant="ghost">{link.name}</Button>
              </Link>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <Link key={link.name} href={link.href}>
                <Button variant="ghost" w="full">{link.name}</Button>
              </Link>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}
