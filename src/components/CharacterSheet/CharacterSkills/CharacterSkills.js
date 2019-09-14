import React from 'react'
import SheetColumn from '../SheetColumn'
import CharacterAttributes from './CharacterAttributes/CharacterAttributes'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  skillsRoot: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
}))

const CharacterSkills = props => {
  const classes = useStyles()
  return (
    <SheetColumn>
      <div className={classes.skillsRoot}>
        <CharacterAttributes />
        <div className={classes.proficiencies}>
          {/* <Inspiration /> */}
          {/* <ProficiencyBonus /> */}
          {/* <SavingThrows /> */}
          {/* <Skills /> */}
        </div>
        {/* <PassivePerception /> */}
        {/* <OtherProficiencies /> */}
      </div>
    </SheetColumn>
  )
}

export default CharacterSkills
