import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/styles'
import { TextField } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexBasis: '33%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    marginTop: ({ bottomRow }) => bottomRow && theme.spacing(2),
  },
}))

const CharacterDetail = ({ type, value, bottomRow }) => {
  const classes = useStyles({ bottomRow })
  return (
    <div data-testid="CharacterDetail" className={classes.root}>
      <TextField
        data-testid="CharacterDetail-TextField"
        helperText={type}
        value={value}
      />
    </div>
  )
}

CharacterDetail.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  bottomRow: PropTypes.bool,
}

export default CharacterDetail
