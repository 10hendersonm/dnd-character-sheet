import React from 'react'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    flexGrow: 1,
  },
}))

const SheetColumn = ({ children }) => {
  const classes = useStyles()
  return <div data-testid="SheetColumn" className={classes.root}>{children}</div>
}

export default SheetColumn
