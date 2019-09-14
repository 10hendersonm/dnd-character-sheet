import React from 'react'
// don't use test-utils' render as it wraps a <MuiTheme />
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Layout from '../Layout'

describe('<Layout />', () => {
  it('renders', () => {
    render(<Layout />)
  })

  it('provides a body', () => {
    const { getByTestId } = render(<Layout />)
    expect(getByTestId('body')).toBeInTheDocument()
  })

  it('provides a header', () => {
    const { getByTestId } = render(<Layout />)
    expect(getByTestId('header')).toBeInTheDocument()
  })

  // TODO figure out how to test that <MuiTheme /> is passed

  it('passes children', () => {
    const childTestId = 'Oliver Twist'
    const { getByTestId } = render(
      <Layout>
        <div data-testid={childTestId} />
      </Layout>
    )
    expect(getByTestId(childTestId)).toBeInTheDocument()
  })
})
