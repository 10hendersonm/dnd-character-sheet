import React from 'react'
import BottomLabelContainer from 'components/Common/BottomLabelContainer'
import { skills } from 'config/dnd-constants'
import SkillProficiency from './SkillProficiency'

const Skills = () => {
  return (
    <BottomLabelContainer label="Skills">
      {Object.entries(skills).map(([skill, attribute]) => (
        <SkillProficiency
          key={`skillProficiency-${skill}`}
          name={skill}
          value={0}
          proficient={Math.round(Math.random() * 3)}
          baseAttribute={attribute}
        />
      ))}
    </BottomLabelContainer>
  )
}

export default Skills
