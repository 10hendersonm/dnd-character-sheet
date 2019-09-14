import React from 'react'

// material-ui
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: theme.spacing(1),
  },
}))

const Body = ({ children }) => {
  const classes = useStyles()
  return (
    <div data-testid="body" className={classes.root}>
      {children}
    </div>
  )
}

export default Body
