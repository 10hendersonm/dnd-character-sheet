import React from 'react'
import BottomLabelContainer from 'components/Common/BottomLabelContainer'
import { attributes } from 'config/dnd-constants'
import SkillProficiency from '../SkillProficiency'

const SavingThrows = () => {
  const isProficient = () => Math.random() > 0.75
  return (
    <BottomLabelContainer label="Saving Throws">
      {attributes.map(attribute => (
        <SkillProficiency
          key={`skillProficiency-${attribute}`}
          name={attribute}
          proficient={isProficient() ? 1 : 0}
        />
      ))}
    </BottomLabelContainer>
  )
}

export default SavingThrows
