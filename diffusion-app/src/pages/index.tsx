'use client';
import { Button, Container, Flex } from "@chakra-ui/react";
import Form from "@rjsf/chakra-ui";
import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import { useCallback, useState } from "react";
import { Gallery } from "../components/gallery";
import { StableDiffusionProcessingTxt2Img } from '../lib/api';
import { widgets } from '../lib/chakra-ui-ex/widget';
import { getAPIClient } from "../lib/get_api";
import text2imgJsonSchema from '../schema/text2img.json';
// import FieldTemplate from "../lib/chakra-ui-ex/FieldTemplate";


function App() {
  const [formData, setFormData] = useState<StableDiffusionProcessingTxt2Img>({});
  const [images, setImages] = useState<string[]>([]);
  const [inProgress, setInProgress] = useState(false);
  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }
  const handleFormChange = ({ formData }) => {
    setFormData(formData)
  }

  async function text2img(data: StableDiffusionProcessingTxt2Img) {
    setInProgress(true);
    try {
      const apiClient = await getAPIClient();
      const res = await apiClient.text2imgapiSdapiV1Txt2imgPost(data)
      setImages(res.data.images)
    } catch (error) {
      setImages([])
    } finally {
      setInProgress(false);
    }

  }

  const importFromJSON = async () => {
    const text = await navigator.clipboard.readText();
    const newData = JSON.parse(text)

    const { model, imgSrc, ...restData } = newData;
    const newFormData = {
      ...formData,
      ...restData
    }
    setFormData(newFormData);
  }

  const go = useCallback(() => {
    text2img(formData)
  }, [formData])



  const galleryProps = {
    batchSize: formData.batch_size,
    width: formData.width,
    height: formData.height,
  }
  return (
    <Flex width="100%" flexGrow={1}>
      <Container marginX={4} marginY={4} height="calc(100vh - 100px)" maxWidth={3000} overflowY="scroll" flexGrow={1}>
        <Gallery {...galleryProps} gap={4} images={images} inProgress={inProgress} />
      </Container >
      <Container marginY={4} height="calc(100vh - 100px)" maxW='container.sm' minW="container.sm" overflowY="scroll" marginX={0}>
        <Flex display="">
          <Button onClick={go} width="full" mb={2} >生成</Button>
          <Button onClick={importFromJSON} variant='outline'>从剪贴板导入</Button>
        </Flex>
        <Form schema={text2imgJsonSchema.schema as RJSFSchema}
          formData={formData}
          uiSchema={text2imgJsonSchema.uiSchema} validator={validator} widgets={widgets} onChange={handleFormChange} >
          <div />
        </Form>
      </Container >
    </Flex>
  );
}

export default App;
