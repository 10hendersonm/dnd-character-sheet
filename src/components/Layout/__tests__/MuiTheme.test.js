import React from 'react'
// don't use test-utils' render as it wraps a <MuiTheme />
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import MuiTheme from '../MuiTheme'
import { makeStyles } from '@material-ui/styles'

describe('<MuiTheme />', () => {
  it('renders', () => {
    render(<MuiTheme />)
  })

  it('passes children', () => {
    const childTestId = 'Shirley Temple'
    const { getByTestId } = render(
      <MuiTheme>
        <div data-testid={childTestId} />
      </MuiTheme>
    )
    expect(getByTestId(childTestId)).toBeInTheDocument()
  })

  it('passes theme to children', () => {
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
      <MuiTheme>
        <ChildComponent />
      </MuiTheme>
    )
    expect(getByTestId(childTestId)).toBeInTheDocument()
  })
})
