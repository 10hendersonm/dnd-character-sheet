import React, { useState, useCallback, createContext } from 'react'

// material-ui
import { makeStyles } from '@material-ui/styles'

// custom
import SheetColumn from '../SheetColumn'
import CharacterAttributes from './CharacterAttributes/CharacterAttributes'
import Inspiration from './Inspiration'
import ProficiencyBonus from './ProficiencyBonus'
import SavingThrows from './SavingThrows/SavingThrows'
import Skills from './Skills'
import PassivePerception from './PassivePerception'
import OtherProficiencies from './OtherProficiencies'
import { attributes as attributeNames } from 'config/dnd-constants'
import { statRoll } from 'utils/dndUtils'

export const AttributeContext = createContext()
export const ProficiencyBonusContext = createContext()

const useStyles = makeStyles((/*theme*/) => ({
  skillsRoot: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
}))

var baseAttributes = {}
attributeNames.forEach(attributeName => {
  baseAttributes[attributeName] = statRoll()
})

const CharacterSkills = () => {
  const classes = useStyles()
  const proficiencyBonusState = useState(2)
  const [attributes, setAttributes] = useState(baseAttributes)
  const setAttribute = useCallback((attribute, value) => {
    setAttributes(prevState => {
      if (typeof value === 'function') {
        value = value(prevState[attribute])
      }
      return {
        ...prevState,
        [attribute]: value,
      }
    })
  }, [])
  return (
    <ProficiencyBonusContext.Provider value={proficiencyBonusState}>
      <AttributeContext.Provider value={[attributes, setAttribute]}>
        <SheetColumn>
          <div className={classes.skillsRoot}>
            <CharacterAttributes />
            <div className={classes.proficiencies}>
              <Inspiration value={true} />
              <ProficiencyBonus value={2} />
              <SavingThrows />
              <Skills />
            </div>
          </div>
          <PassivePerception />
          <OtherProficiencies />
        </SheetColumn>
      </AttributeContext.Provider>
    </ProficiencyBonusContext.Provider>
  )
}

export default CharacterSkills
