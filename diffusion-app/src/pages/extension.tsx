// 'use client';
// import { Box, SimpleGrid } from '@chakra-ui/react';
// import { open } from '@tauri-apps/api/dialog';
// import { readDir, readBinaryFile } from '@tauri-apps/api/fs';
// import { pictureDir } from '@tauri-apps/api/path';
// import { useState } from 'react';


// async function getFiles() {
//   const selected = await open({
//     directory: true,
//     multiple: false,
//     defaultPath: await pictureDir(),
//   });
//   console.log(selected)
//   if (Array.isArray(selected)) {
//     // user selected multiple directories

//   } else if (selected === null) {
//     // user cancelled the selection

//   } else {
//     // user selected a single directory
//     // Reads the `$APPDATA/users` directory recursively
//     try {
//       const entries = await readDir(selected);
//       return {
//         currentDir: selected,
//         files: entries.filter(entry => !entry.children)
//       };
//     } catch (error) {
//       console.error(error)
//     }
//   }
//   return {
//     currentDir: selected,
//     files: []
//   };

// }

export default function Extension() {
  return <div>hi</div>
}
// export default function Extension() {
//   const [allFiles, setAllFiles] = useState([]);
//   const [currentPath, setCurrentPath] = useState('');
//   const [selectedFileUrl, setSelectedFileUrl] = useState('');
//   const handleSelectDir = async () => {
//     const { currentDir, files } = await getFiles();
//     console.log(currentDir, files)
//     setAllFiles(files);
//     setCurrentPath(currentDir as string);
//   }
//   const handleSelectFile = async (filePath: string) => {
//     const content = await readBinaryFile(filePath);
//     const blob = new Blob([content], { type: 'image/webp' });
//     const imageUrl = URL.createObjectURL(blob);
//     setSelectedFileUrl(imageUrl);
//   }
//   return (
//     <div>
//       Extension
//       {currentPath}
//       {allFiles.map(file => {
//         return <div key={file.name} onClick={() => handleSelectFile(file.path)}>
//           {file.name}
//         </div>
//       })}
//       <SimpleGrid columns={2} spacing={10} onClick={handleSelectDir}>
//         <Box bg='tomato' height='80px' width="80px">
//           {selectedFileUrl && <img src={selectedFileUrl} alt="" />}
//         </Box>
//         <Box bg='tomato' height='80px' width="80px"></Box>
//         <Box bg='tomato' height='80px' width="80px"></Box>
//         <Box bg='tomato' height='80px' width="80px"></Box>
//         <Box bg='tomato' height='80px' width="80px"></Box>
//       </SimpleGrid>
//     </div>
//   )
// }