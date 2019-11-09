import React from 'react'
import BottomLabelContainer from 'components/Common/BottomLabelContainer'
import { skills } from 'config/dnd-constants'
import SkillProficiency from './SkillProficiency'

const Skills = () => {
  const proficiency = () => 1
  // {
  //   const rand = Math.random()
  //   if (rand < 0.66) return 0
  //   if (rand < 0.95) return 1
  //   return 2
  // }
  return (
    <BottomLabelContainer label="Skills">
      {Object.entries(skills).map(([skill, attribute]) => (
        <SkillProficiency
          key={`skillProficiency-${skill}`}
          name={skill}
          value={Math.round(Math.random() * 10) - 5}
          proficient={proficiency()}
          baseAttribute={attribute}
        />
      ))}
    </BottomLabelContainer>
  )
}

export default Skills
