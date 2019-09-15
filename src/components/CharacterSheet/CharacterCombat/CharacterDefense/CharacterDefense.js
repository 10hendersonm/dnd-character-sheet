import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: theme.palette.divider,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    '& > *': {
      flexGrow: 1,
    },
  },
}))

const CharacterDefense = () => {
  const classes = useStyles()
  return (
    <div className={classes.root} data-testid="CharacterDefense">
      <div className={classes.row}>
        {/* <ArmorClass /> */}
        {/* <Initiative />
      <Speed /> */}
      </div>
      {/* <HitPoints /> */}
      <div className={classes.row}>
        {/* <HitDice /> */}
        {/* <DeathSaves /> */}
      </div>
    </div>
  )
}

export default CharacterDefense
