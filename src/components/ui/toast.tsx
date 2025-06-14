'use client'

import { useToast, UseToastOptions, ToastPosition } from '@chakra-ui/react'

export function useCustomToast() {
  const toast = useToast()

  const showToast = (options: UseToastOptions) => {
    toast({
      position: 'bottom-right' as ToastPosition,
      duration: 3000,
      isClosable: true,
      ...options,
    })
  }

  return {
    success: (message: string) => {
      showToast({
        title: '成功',
        description: message,
        status: 'success',
      })
    },
    error: (message: string) => {
      showToast({
        title: '错误',
        description: message,
        status: 'error',
      })
    },
    warning: (message: string) => {
      showToast({
        title: '警告',
        description: message,
        status: 'warning',
      })
    },
    info: (message: string) => {
      showToast({
        title: '提示',
        description: message,
        status: 'info',
      })
    },
  }
} 