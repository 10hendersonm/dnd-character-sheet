import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => {
  const centerContent = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      margin: theme.spacing(1),
    },
    valueRoot: {
      flexShrink: 0,
      border: `1px solid ${theme.palette.text.primary}`,
      padding: theme.spacing(1),
      height: 40,
      width: 40,
      borderRadius: ({ rounded }) => rounded && '100%',
      ...centerContent,
    },
    labelRoot: {
      flexGrow: 1,
      border: `1px solid ${theme.palette.text.primary}`,
      height: '75%',
      padding: theme.spacing(1),
      ...centerContent,
    },
  }
})

const RightLabelBox = ({ label, value, rounded, ...props }) => {
  const classes = useStyles({ rounded })
  return (
    <div data-testid="RightLabelBox" className={classes.root} {...props}>
      <div data-testid="RightLabelBox-value" className={classes.valueRoot}>
        {value}
      </div>
      <div data-testid="RightLabelBox-label" className={classes.labelRoot}>
        {label}
      </div>
    </div>
  )
}

RightLabelBox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  rounded: PropTypes.bool,
}

export default RightLabelBox
