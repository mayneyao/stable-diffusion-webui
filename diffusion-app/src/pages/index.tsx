import { invoke } from "@tauri-apps/api/tauri";
import { useState } from "react";
import Form from "@rjsf/chakra-ui";
import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import formJsonSchema from '../schema/text2img.json';



function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div>
      <Form schema={formJsonSchema as RJSFSchema} validator={validator} />
    </div>
  );
}

export default App;
