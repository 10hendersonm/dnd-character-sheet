import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    border: `3px double ${theme.palette.text.primary}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    margin: theme.spacing(1),
  },
  label: {
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  contentRoot: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: theme.spacing(1),
    flexGrow: 1,
  },
}))

const BottomLabelContainer = ({ label, children }) => {
  const classes = useStyles()
  return (
    <div data-testid="BottomLabelContainer" className={classes.root}>
      <div className={classes.contentRoot}>{children}</div>
      <Typography variant="caption" className={classes.label}>
        {label}
      </Typography>
    </div>
  )
}

BottomLabelContainer.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default BottomLabelContainer
