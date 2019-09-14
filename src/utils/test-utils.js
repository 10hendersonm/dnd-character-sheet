import React from 'react'
import { render } from '@testing-library/react'
import MuiTheme from '../components/Layout/MuiTheme'
import PropTypes from 'prop-types'

const testProviders = ({ children }) => <MuiTheme>{children}</MuiTheme>
testProviders.propTypes = {
  children: PropTypes.node.isRequired,
}

const customRender = (ui, options) =>
  render(ui, { wrapper: testProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
