import React from 'react'
import PropTypes from 'prop-types'

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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
