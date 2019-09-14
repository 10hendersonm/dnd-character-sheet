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
        {/* <PassivePerception /> */}
        {/* <OtherProficiencies /> */}
      </div>
    </SheetColumn>
  )
}

export default CharacterSkills
