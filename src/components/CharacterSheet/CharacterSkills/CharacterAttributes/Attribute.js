import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(1),
    height: 100,
    borderRadius: 5,
    border: `3px double ${theme.palette.text.primary}`,
  },
  name: {
    textTransform: 'uppercase',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  value: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  modifier: {
    position: 'absolute',
    bottom: 0,
    left: '15%',
    right: '15%',
    backgroundColor: theme.palette.background.paper,
    transform: 'translateY(30%)',
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: '100%',
    alignSelf: 'stretch',
    textAlign: 'center',
    padding: theme.spacing(0.5),
  },
}))

const Attribute = ({ name, value }) => {
  const classes = useStyles()
  const modifier = Math.round((value - 11) / 2)
  return (
    <div data-testid="Attribute" className={classes.root}>
      <Typography className={classes.name} variant="caption">
        {name}
      </Typography>
      <Typography
        data-testid="attribute-value"
        className={classes.value}
        variant="h6"
      >
        {value}
      </Typography>
      <Typography className={classes.modifier} variant="h6">
        {(modifier > 0 && '+') + modifier}
      </Typography>
    </div>
  )
}

Attribute.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

export default Attribute
