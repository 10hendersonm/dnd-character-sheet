import React, { useContext } from 'react'
import PropTypes from 'prop-types'

// material-ui
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
import { Typography } from '@material-ui/core'

// custom
import { AttributeContext, ProficiencyBonusContext } from './CharacterSkills'
import { attributeToModifier } from 'utils/dndUtils'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  modifierValueContainer: {
    width: 35,
    borderBottom: `1px solid ${theme.palette.text.primary}`,
    display: 'flex',
    justifyContent: 'center',
  },
  modifierValue: {
    position: 'relative',
  },
  modifierSign: {
    position: 'absolute',
    right: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  baseAttribute: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}))

const SkillProficiency = ({ name, proficient, baseAttribute }) => {
  const classes = useStyles()
  const [attributes] = useContext(AttributeContext)
  const [proficiencyBonus] = useContext(ProficiencyBonusContext)
  const proficiencyMultiplier =
    typeof proficient === 'number' ? proficient : proficient ? 1 : 0
  const value =
    attributeToModifier(attributes[baseAttribute || name]) +
    // attributeToModifier(3) +
    proficiencyBonus * proficiencyMultiplier
  var icon
  if (proficient === 2) {
    icon = <ExpertIcon data-testid="SkillProficiency-Expert" />
  } else if (proficient === 1 || proficient) {
    icon = <ProficientIcon data-testid="SkillProficiency-Proficient" />
  } else icon = <UnproficientIcon data-testid="SkillProficiency-Unproficient" />
  return (
    <div className={classes.root} data-testid="SkillProficiency">
      {icon}
      <Typography
        className={classes.modifierValueContainer}
        data-testid="SkillProficiency-Value"
        component="div"
      >
        <div className={classes.modifierValue}>
          <div className={classes.modifierSign}>
            {value > 0 ? '+' : value < 0 ? '-' : ''}
          </div>
          {Math.abs(value)}
        </div>
      </Typography>
      <Typography data-testid="SkillProficiency-Name">{name}</Typography>
      {!!baseAttribute && (
        <Typography
          data-testid="SkillProficiency-BaseAttribute"
          variant="caption"
          color="textSecondary"
          className={classes.baseAttribute}
        >{`(${baseAttribute.substring(0, 3)})`}</Typography>
      )}
    </div>
  )
}

SkillProficiency.propTypes = {
  name: PropTypes.string.isRequired,
  proficient: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  baseAttribute: PropTypes.string,
}

export default SkillProficiency
