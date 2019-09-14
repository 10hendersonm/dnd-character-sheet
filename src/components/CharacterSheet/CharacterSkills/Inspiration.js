import React from 'react'
import PropTypes from 'prop-types'
import RightLabelBox from './RightLabelBox'
import CheckIcon from '@material-ui/icons/Check'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  emptyPlaceholder: {
    height: 24,
    width: 24,
  },
}))

const Inspiration = ({ value: inspired }) => {
  const classes = useStyles()
  const inspirationDisplayValue = inspired ? (
    <CheckIcon data-testid="Inspiration-true" className={classes.icon} />
  ) : (
    <div data-testid="Inspiration-false" className={classes.emptyPlaceholder} />
  )
  return (
    <RightLabelBox
      data-testid="Inspiration"
      label="Inspiration"
      value={inspirationDisplayValue}
    />
  )
}

Inspiration.propTypes = {
  value: PropTypes.bool.isRequired,
}

export default Inspiration
