import React, { useContext } from 'react'

// custom
import RightLabelBox from './RightLabelBox'
import { AttributeContext, ProficiencyBonusContext } from './CharacterSkills'
import { attributeMap } from 'config/dnd-constants'
import { attributeToModifier } from 'utils/dndUtils'

const PassivePerception = () => {
  const [attributes] = useContext(AttributeContext)
  const [proficiencyBonus] = useContext(ProficiencyBonusContext)
  const wisdomModifier =
    attributeToModifier(attributes[attributeMap.Wisdom]) + proficiencyBonus * 0
  return (
    <RightLabelBox
      data-testid="PassivePerception"
      label="Passive Wisdom (Perception)"
      value={(wisdomModifier + 10).toString()}
      rounded
    />
  )
}

export default PassivePerception
