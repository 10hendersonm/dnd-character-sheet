import React from 'react'
import PropTypes from 'prop-types'
import RightLabelBox from './RightLabelBox'

const ProficiencyBonus = ({ value }) => {
  return (
    <RightLabelBox
      data-testid="ProficiencyBonus"
      label="Proficiency Bonus"
      value={`+${value}`}
      rounded
    />
  )
}

ProficiencyBonus.propTypes = {
  value: PropTypes.number.isRequired,
}

export default ProficiencyBonus
