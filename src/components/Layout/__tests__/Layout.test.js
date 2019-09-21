import React from 'react'
// don't use test-utils' render as it wraps a <MuiTheme />
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Layout from '../Layout'
import { makeStyles } from '@material-ui/styles'

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

  it('provides <MuiTheme />', () => {
    const childTestId = 'Donnie Trump'
    const useStyles = makeStyles(theme => ({
      root: {
        // test will throw if no theme exists
        backgroundColor: theme.palette.primary.main,
      },
    }))
    const ChildComponent = () => {
      const classes = useStyles()
      return <div data-testid={childTestId} className={classes.root} />
    }
    const { getByTestId } = render(
      <Layout>
        <ChildComponent />
      </Layout>
    )
    expect(getByTestId(childTestId)).toHaveStyle('background-color: #074')
  })

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
