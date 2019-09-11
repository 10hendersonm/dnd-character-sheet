import React from 'react'

// material-ui
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  appBar: {},
  spacer: {
    ...theme.mixins.toolbar,
  },
}))

const Header = ({ title }) => {
  const classes = useStyles()
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.spacer} />
    </>
  )
}

export default Header
