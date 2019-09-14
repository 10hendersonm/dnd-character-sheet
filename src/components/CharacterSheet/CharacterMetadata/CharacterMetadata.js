import React from 'react'

import { makeStyles } from '@material-ui/styles'
import CharacterDetail from './CharacterDetail'
import CharacterName from './CharacterName'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  detailBorder: {
    borderLeft: `3px double ${theme.palette.text.primary}`,
    borderRight: `3px double ${theme.palette.text.primary}`,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  detailRoot: {
    display: 'flex',
    flexFlow: 'row wrap',
    borderTop: `3px double ${theme.palette.text.primary}`,
    borderBottom: `3px double ${theme.palette.text.primary}`,
    borderRadius: 10,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}))

const CharacterMetadata = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CharacterName />
      <div className={classes.detailBorder}>
        <div className={classes.detailRoot}>
          <CharacterDetail type="Class &amp; Level" value="Druid - 1" />
          <CharacterDetail type="Background" value="Folk Hero" />
          <CharacterDetail type="Player Name" value="Marty" />
          <CharacterDetail type="Race" value="Dark Elf" bottomRow />
          <CharacterDetail type="Alignment" value="Neutral" bottomRow />
          <CharacterDetail type="Experience Points" value="9001" bottomRow />
        </div>
      </div>
    </div>
  )
}

export default CharacterMetadata
