// pages/_document.js

import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import { appWindow } from '@tauri-apps/api/window'

import { theme } from '../components/theme'
import { useEffect } from 'react'

export default function Document() {
  // useEffect(() => {
  //   document
  //     .getElementById('titlebar-minimize')
  //     .addEventListener('click', () => appWindow.minimize())
  //   document
  //     .getElementById('titlebar-maximize')
  //     .addEventListener('click', () => appWindow.toggleMaximize())
  //   document
  //     .getElementById('titlebar-close')
  //     .addEventListener('click', () => appWindow.close())
  // }, [])
  return (
    <Html lang='en'>
      <Head />
      <body>
        {/* <div data-tauri-drag-region className="titlebar">
          <div className="titlebar-button" id="titlebar-minimize">
            <img
              src="https://api.iconify.design/mdi:window-minimize.svg"
              alt="minimize"
            />
          </div>
          <div className="titlebar-button" id="titlebar-maximize">
            <img
              src="https://api.iconify.design/mdi:window-maximize.svg"
              alt="maximize"
            />
          </div>
          <div className="titlebar-button" id="titlebar-close">
            <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
          </div>
        </div> */}
        {/* 👇 Here's the script */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}