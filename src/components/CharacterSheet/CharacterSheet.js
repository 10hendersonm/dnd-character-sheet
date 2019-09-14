import React from 'react'

// material-ui
import { makeStyles } from '@material-ui/styles'
import { Paper } from '@material-ui/core'

// custom
import CharacterMetadata from './CharacterMetadata/CharacterMetadata'
import CharacterSkills from './CharacterSkills/CharacterSkills'
import CharacterCombat from './CharacterCombat'
import CharacterBackground from './CharacterBackground'

const useStyles = makeStyles(theme => ({
  root: {
    alignSelf: 'center',
    padding: theme.spacing(2),

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  sheetRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
}))

const CharacterSheet = props => {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <CharacterMetadata />
      <div className={classes.sheetRow}>
        <CharacterSkills />
        <CharacterCombat />
        <CharacterBackground />
      </div>
    </Paper>
  )
}

export default CharacterSheet
