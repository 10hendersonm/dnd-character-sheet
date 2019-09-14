import React from 'react'
import PropTypes from 'prop-types'

// material-ui
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'

// custom
import theme from '../../config/theme'

const MuiTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

MuiTheme.propTypes = {
  children: PropTypes.node,
}

export default MuiTheme
