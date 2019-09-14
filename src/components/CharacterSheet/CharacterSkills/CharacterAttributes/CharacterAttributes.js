import React from 'react'
import Attribute from './Attribute'

const CharacterAttributes = () => {
  return (
    <div data-testid="CharacterAttributes">
      <Attribute name="Strength" value={10} />
      <Attribute name="Dexterity" value={10} />
      <Attribute name="Constitution" value={10} />
      <Attribute name="Intelligence" value={10} />
      <Attribute name="Wisdom" value={10} />
      <Attribute name="Charisma" value={10} />
    </div>
  )
}

export default CharacterAttributes
