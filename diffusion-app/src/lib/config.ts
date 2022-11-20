import { BaseDirectory, createDir, exists, readTextFile, writeFile } from "@tauri-apps/api/fs";


export const getOrInitConfigFile = async () => {
  const hasConfig = await exists("df.config.json", {
    dir: BaseDirectory.App
  })
  if (!hasConfig) {
    await createDir("", {
      dir: BaseDirectory.App,
      recursive: true,
    });
    await writeFile({
      contents: JSON.stringify({
        "api": "http://localhost:7861"
      }, null, 2),
      path: "df.config.json",
    }, {
      dir: BaseDirectory.App,
    })
  }
  const configText = await readTextFile("df.config.json", {
    dir: BaseDirectory.App
  })
  return JSON.parse(configText);
}


export const setConfig = async (config: any) => {
  await writeFile({
    contents: JSON.stringify(config, null, 2),
    path: "df.config.json",
  }, {
    dir: BaseDirectory.App,
  })
}