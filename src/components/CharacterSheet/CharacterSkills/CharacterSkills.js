import React from 'react'

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

const useStyles = makeStyles((/*theme*/) => ({
  skillsRoot: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
}))

const CharacterSkills = () => {
  const classes = useStyles()
  return (
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
      <PassivePerception wisdomModifier={0} />
      <OtherProficiencies />
    </SheetColumn>
  )
}

export default CharacterSkills
