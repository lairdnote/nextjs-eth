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
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Provider>
          <Box minH="100vh" display="flex" flexDirection="column">
            <Header />
            <Box flex="1">
              {children}
            </Box>
            <Footer />
          </Box>
        </Provider>
      </body>
    </html>
  );
}
