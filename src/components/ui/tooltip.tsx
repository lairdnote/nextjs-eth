'use client';

import {
  Tooltip as ChakraTooltip,
  TooltipProps as ChakraTooltipProps,
} from '@chakra-ui/react'

export interface TooltipProps extends ChakraTooltipProps {}

export function Tooltip(props: TooltipProps) {
  return <ChakraTooltip {...props} />
}
