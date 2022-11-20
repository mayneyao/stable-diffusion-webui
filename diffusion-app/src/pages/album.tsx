import { Flex } from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { readImagesFromConfigDir } from '../lib/file';

function Album() {
  const [images, setImages] = useState<Blob[]>([]);
  useEffect(() => {
    readImagesFromConfigDir().then(res => setImages(res));
  }, [])
  const _images = useMemo(() => {
    return images.map(URL.createObjectURL);
  }, [images])

  return (
    <PhotoProvider>
      <Flex padding={4} wrap="wrap" gap={10} borderRadius={4} alignItems="flex-start" height="95vh" overflowY='scroll'>
        {_images.map((item, index) => (
          <PhotoView key={index} src={item}>
            <img src={item} alt="" />
          </PhotoView>
        ))}
      </Flex>
    </PhotoProvider>
  );
}

export default Album;