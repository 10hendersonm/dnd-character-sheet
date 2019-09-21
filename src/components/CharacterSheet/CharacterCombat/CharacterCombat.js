import React from 'react'
import SheetColumn from '../SheetColumn'
import CharacterDefense from './CharacterDefense/CharacterDefense'

const CharacterCombat = () => {
  return (
    <SheetColumn>
      <CharacterDefense />
      {/* <CharacterOffense /> */}
      {/* <CharacterEquipment /> */}
    </SheetColumn>
  )
}

export default CharacterCombat
