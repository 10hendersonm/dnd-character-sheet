import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/styles'
import { TextField } from '@material-ui/core'

const useStyles = makeStyles((/*theme*/) => ({
  root: {
    flexBasis: '33%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
}))

const CharacterDetail = ({ type }) => {
  const classes = useStyles()
  return (
    <div data-testid="CharacterDetail" className={classes.root}>
      <TextField data-testid="CharacterDetail-TextField" helperText={type} />
    </div>
  )
}

CharacterDetail.propTypes = {
  type: PropTypes.string.isRequired,
}

export default CharacterDetail
