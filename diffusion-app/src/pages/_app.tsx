import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import type { AppProps } from "next/app";
import Navbar from '../components/navbar';
import { Sidebar } from "../components/sidebar";
import { theme } from "../components/theme";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider theme={theme}>
      <Flex width='100%' h="100vh" position="fixed" flexDirection="column">
        <Navbar />
        <Flex alignItems="flex-start">
          <Box maxW='container.sm' h="100vh" w="300px" flexGrow={0}>
            <Sidebar />
          </Box>
          <Component {...pageProps} />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}
