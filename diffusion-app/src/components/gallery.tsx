import { Box, Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { getAPIClient } from '../lib/get_api'

interface IGalleryProps {
  width: number
  height: number
  batchSize: number
  gap: number,
  images?: string[]
  inProgress?: boolean
}

export const Gallery = ({ width = 256, height = 256, batchSize = 9, images = [], inProgress }: IGalleryProps) => {
  const [progress, setProgress] = useState(0)
  async function getProgress() {
    const client = await getAPIClient();
    const res = await client.progressapiSdapiV1ProgressGet()
    return res.data.progress;
  }
  let id;

  useEffect(() => {
    id = setInterval(async () => {
      if (!inProgress) {
        return;
      }
      const progress = await getProgress();
      setProgress(progress)
    }, 1000)
    if (!inProgress) {

    }
    return () => clearInterval(id);
  }, [inProgress]);

  const defaultWidth = 256;
  return (
    <Flex padding={2} wrap="wrap" gap={10} flex="auto" borderRadius={4}>
      {
        [...Array(batchSize).keys()].map((_, index) => {
          const image = images[index];
          return (
            <Box w={defaultWidth} h={defaultWidth * (height / width)} bg='gray.400' position="relative" borderRadius={4}>
              {inProgress && <Box w={progress * defaultWidth} h={defaultWidth * (height / width)} bg='gray.300' position="absolute" borderRadius={4} />}
              {image && <img src={`data:image/png;base64,${image}`} />}
            </Box>
          )
        })
      }
    </Flex>
  )
}