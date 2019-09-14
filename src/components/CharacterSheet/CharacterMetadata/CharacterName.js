import React from 'react'

import { makeStyles } from '@material-ui/styles'
import { TextField, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexBasis: '30%',
    flexShrink: 0,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'flex-end',
    paddingRight: theme.spacing(1),
  },
}))

const CharacterName = props => {
  const classes = useStyles()
  return (
    <div data-testid="CharacterName" className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Dungeons &amp; Dragons
      </Typography>
      <TextField helperText="Character Name" />
    </div>
  )
}

export default CharacterName
