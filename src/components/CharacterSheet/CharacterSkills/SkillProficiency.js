import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  // RadioButtonChecked as ProficientIcon,
  // Adjust as ProficientIcon,
  Done as ProficientIcon,
  RadioButtonUnchecked as UnproficientIcon,
  // Minimize as UnproficientIcon,
  // WbSunnySharp as ExpertIcon,
  // RadioButtonChecked as ExpertIcon,
  // Flare as ExpertIcon,
  // ControlPoint as ExpertIcon,
  DoneAll as ExpertIcon,
} from '@material-ui/icons'
import { TextField, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  textField: {
    width: 40,
    textAlign: 'center',
  },
}))

const SkillProficiency = ({ name, value, proficient, baseAttribute }) => {
  const classes = useStyles()
  const displayValue = value > 0 ? `+${value}` : value
  var icon
  if (proficient === 2) {
    icon = <ExpertIcon />
  } else if (proficient === 1 || proficient) icon = <ProficientIcon />
  else icon = <UnproficientIcon />
  return (
    <div className={classes.root}>
      {icon}
      <TextField
        value={displayValue}
        inputProps={{ className: classes.textField }}
      />
      <Typography>{name}</Typography>
      {!!baseAttribute && (
        <Typography
          variant="caption"
          color="textDisabled"
        >{`(${baseAttribute.substring(0, 3)})`}</Typography>
      )}
    </div>
  )
}

SkillProficiency.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  proficient: PropTypes.oneOf([PropTypes.bool, PropTypes.number]),
  baseAttribute: PropTypes.string,
}

export default SkillProficiency
