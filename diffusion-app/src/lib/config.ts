import { BaseDirectory, createDir, exists, readTextFile, writeFile, readDir } from "@tauri-apps/api/fs";


export const getOrInitConfigFile = async () => {
  const hasConfig = await exists("df.config.json", {
    dir: BaseDirectory.App
  })

  const hasFileDir = await exists("outputs", {
    dir: BaseDirectory.App,
  })
  const defaultConfig = {
    "api": "http://localhost:7861",
  }
  if (!hasFileDir) {
    await createDir("outputs", {
      dir: BaseDirectory.App,
      recursive: true,
    });
  }

  try {
    const dir = await readDir("outputs", {
      dir: BaseDirectory.App,
    })
    defaultConfig["fileStorePath"] = dir[0].path;
    console.log(defaultConfig["fileStorePath"])
  } catch (error) {
  }

  if (!hasConfig) {
    await writeFile({
      contents: JSON.stringify(defaultConfig, null, 2),
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