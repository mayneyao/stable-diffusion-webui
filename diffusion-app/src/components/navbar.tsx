import { Box, Button, Flex, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex
      minH={12}
      width="100%"
      flexDirection="row-reverse"
      alignItems="center"
      borderBottom='1px solid'
      borderBottomColor="gray.100"
      marginBottom={4}
    >
      <Button colorScheme='teal' variant='ghost' onClick={toggleColorMode}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Flex>
  )
}