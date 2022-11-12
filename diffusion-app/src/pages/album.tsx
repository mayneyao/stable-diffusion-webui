import { Box, SimpleGrid } from '@chakra-ui/react'

export default function Album() {
  return (
    <div>
      hi
      <SimpleGrid columns={2} spacing={10}>
        <Box bg='tomato' height='80px' width="80px"></Box>
        <Box bg='tomato' height='80px' width="80px"></Box>
        <Box bg='tomato' height='80px' width="80px"></Box>
        <Box bg='tomato' height='80px' width="80px"></Box>
        <Box bg='tomato' height='80px' width="80px"></Box>
      </SimpleGrid>
    </div>

  )
}