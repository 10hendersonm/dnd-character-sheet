import React from 'react'
import PropTypes from 'prop-types'
import RightLabelBox from './RightLabelBox'

const PassivePerception = ({ wisdomModifier }) => {
  return (
    <RightLabelBox
      data-testid="PassivePerception"
      label="Passive Wisdom (Perception)"
      value={wisdomModifier + 10}
      rounded
    />
  )
}

PassivePerception.propTypes = {
  wisdomModifier: PropTypes.number.isRequired,
}

export default PassivePerception
