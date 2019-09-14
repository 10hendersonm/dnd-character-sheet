import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

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
  useEffect(() => {
    document.title = title
  }, [title])
  return (
    <>
      <AppBar data-testid="header">
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

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
