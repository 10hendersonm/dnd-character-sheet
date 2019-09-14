import React from 'react'
import Attribute from './Attribute'
import { makeStyles } from '@material-ui/styles'
import { attributes } from 'config/dnd-constants'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: theme.palette.divider,
    borderRadius: 5,
    padding: theme.spacing(1),
  },
}))

const CharacterAttributes = () => {
  const classes = useStyles()
  return (
    <div data-testid="CharacterAttributes" className={classes.root}>
      {attributes.map(attribute => (
        <Attribute key={`attribute-${attribute}`} name={attribute} value={10} />
      ))}
    </div>
  )
}

export default CharacterAttributes
