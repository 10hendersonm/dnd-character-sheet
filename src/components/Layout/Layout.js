import React from 'react'

// material-ui
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'

// custom
import theme from '../../config/theme'
import Body from './Body'
import Header from './Header'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Body>
      <Header title="Character Sheet" />
      {children}
    </Body>
  </ThemeProvider>
)

export default Layout
