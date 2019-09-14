import React from 'react'

// custom
import Body from './Body'
import Header from './Header'
import MuiTheme from './MuiTheme'

const Layout = ({ children }) => (
  <MuiTheme>
    <Body>
      <Header title="Character Sheet" />
      {children}
    </Body>
  </MuiTheme>
)

export default Layout
