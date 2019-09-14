import React from 'react'
import { render } from '@testing-library/react'
import MuiTheme from '../components/Layout/MuiTheme'

const testProviders = ({ children }) => <MuiTheme>{children}</MuiTheme>

const customRender = (ui, options) =>
  render(ui, { wrapper: testProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
