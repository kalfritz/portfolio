import React from "react"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "../src/styles/global"
import light from "../src/styles/themes/light"

export function wrapRootElement({ element }) {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  )
}
