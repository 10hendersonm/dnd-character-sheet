import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  name: {
    textTransform: 'uppercase',
  },
  modifier: {
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: '100%',
    alignSelf: 'stretch',
    textAlign: 'center',
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
      <Typography data-testid="attribute-value" className={classes.value}>
        {value}
      </Typography>
      <Typography className={classes.modifier}>
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
