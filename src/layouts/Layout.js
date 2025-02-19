import React from 'react'
import { Helmet } from 'react-helmet'

const Layout = ({ children }) => (
  <>
    <Helmet>
      <link
        rel="icon"
        type="image/x-icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'><text x='0' y='24' font-size='24'>🧑🏻‍💻</text></svg>"
      />
    </Helmet>
    <main>{children}</main>
  </>
)

export default Layout
