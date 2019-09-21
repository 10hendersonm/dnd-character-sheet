import React from 'react'
import BottomLabelContainer from 'components/Common/BottomLabelContainer'
import { attributes } from 'config/dnd-constants'
import SkillProficiency from '../SkillProficiency'

const SavingThrows = () => {
  return (
    <BottomLabelContainer label="Saving Throws">
      {attributes.map(attribute => (
        <SkillProficiency
          key={`skillProficiency-${attribute}`}
          name={attribute}
          value={0}
          proficient={Math.floor(Math.random() * 3)}
        />
      ))}
    </BottomLabelContainer>
  )
}

export default SavingThrows
