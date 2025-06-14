'use client';

import { Provider } from "@/components/ui/provider"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { ColorModeScript } from '@chakra-ui/react'
import theme from "@/components/theme"
import { Box } from '@chakra-ui/react'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Your Company</title>
      </head>
      <body suppressHydrationWarning>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Provider>
          <Box minH="100vh" display="flex" flexDirection="column">
            <Header />
            <Box flex="1" as="main">
              {children}
            </Box>
            <Footer />
          </Box>
        </Provider>
      </body>
    </html>
  );
}
