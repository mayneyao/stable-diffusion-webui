import { Box, Container, Flex } from "@chakra-ui/react";
import Form from "@rjsf/chakra-ui";
import { IChangeEvent } from "@rjsf/core";
import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import { DefaultApi, StableDiffusionProcessingTxt2Img } from '../lib/api';
import { widgets } from '../lib/chakra-ui-ex/widget';
import text2imgJsonSchema from '../schema/text2img.json';
// import FieldTemplate from "../lib/chakra-ui-ex/FieldTemplate";

const apiClient = new DefaultApi()


async function text2img(data: IChangeEvent<StableDiffusionProcessingTxt2Img>) {
  console.log(data)
  const res = await apiClient.text2imgapiSdapiV1Txt2imgPost(data.formData)
  console.log(res.data)
}


function App() {
  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <Flex width="100%">
      <Box flex='auto'>
        <Container maxW='container.md' h="100vh">
          {/* templates={{ FieldTemplate }}  */}
        </Container >
      </Box>
      <Container maxW='container.sm' h="100vh" minW="container.sm" overflowY="scroll">
        {/* templates={{ FieldTemplate }}  */}
        <Form schema={text2imgJsonSchema.schema as RJSFSchema} uiSchema={text2imgJsonSchema.uiSchema} validator={validator} onSubmit={text2img} widgets={widgets} />
      </Container >
    </Flex>
  );
}

export default App;
