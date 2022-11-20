import Form from "@rjsf/chakra-ui";
import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import { useEffect, useState } from "react";
import { widgets } from "../lib/chakra-ui-ex/widget";
import { getOrInitConfigFile, setConfig } from "../lib/config";
import settingsJsonSchema from '../schema/settings.json';


export default function Settings() {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    getOrInitConfigFile().then((config) => {
      setFormData(config);
    })
  }, [])
  const saveConfig = async ({ formData }) => {
    setConfig(formData);
  };

  return (
    <Form schema={settingsJsonSchema.schema as RJSFSchema}
      formData={formData}
      uiSchema={settingsJsonSchema.uiSchema} validator={validator} widgets={widgets} onSubmit={saveConfig}>
    </Form>
  )
}