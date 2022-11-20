// import { Blob } from 'buffer';

import { BaseDirectory, readBinaryFile, readDir, writeBinaryFile } from "@tauri-apps/api/fs";
import { nanoid } from 'nanoid'
import { join } from "path";
import { getOrInitConfigFile } from "./config";


// String base 64 to blob 
export function dataURItoBlob(dataURI: string) {
  const byteString = atob(dataURI.split(',')[1]);
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);

  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  var blob = new (window as any).Blob([ab], { type: mimeString });

  return blob;
}


export const binaryIntoImageBlob = async (binary: Uint8Array) => {
  const blob = new Blob([binary], { type: "image/png" });
  return blob;
}

export const blobToBinary = async (blob) => {
  const buffer = await blob.arrayBuffer();
  return new Uint8Array(buffer);
};


export const saveImage = async (blob: Blob, extension = "png") => {
  const bin = await blobToBinary(blob);
  const config = await getOrInitConfigFile();

  // I'm constructing a unique file name here with nanoid,
  // but you can replace it with anything!
  const fileName = `${nanoid()}.${extension}`;

  await writeBinaryFile(
    {
      contents: bin,
      path: join(config.fileStorePath, fileName),
    }
  );

};

export const transformAPIRespImgIntoBlob = (imageB64String: string) => {
  let imgSrc = `data:image/png;base64,${imageB64String}`
  return dataURItoBlob(imgSrc)
}

export const readFile = async (path: string, start = 0, end = 10) => {
  const files = await readDir(path);
  const res = Promise.all(
    files.slice(start, end).map(async (file) => {
      console.log(file.path)
      const content = await readBinaryFile(file.path);
      return binaryIntoImageBlob(content);
    })
  )
  return res;
}

export const readImagesFromConfigDir = async () => {
  const config = await getOrInitConfigFile();
  return await readFile(config.fileStorePath);
}