import { extendTheme } from '@chakra-ui/react'

const colors = {}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

export const theme = extendTheme({ colors, config })

