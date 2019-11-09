import React, { useContext } from 'react'
import PropTypes from 'prop-types'

// material-ui
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'

// custom
import { AttributeContext } from '../CharacterSkills'
import { attributeToModifier } from 'utils/dndUtils'

const useStyles = makeStyles(theme => ({
  contentBuffer: {
    flex: `0 0 ${Math.floor(100 / 6)}%`,
    // paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'stretch',
  },
  root: {
    flexGrow: 1,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    // margin: theme.spacing(1),
    minHeight: 100,
    borderRadius: 5,
    border: `3px double ${theme.palette.text.primary}`,
  },
  name: {
    textTransform: 'uppercase',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  value: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  modifier: {
    position: 'absolute',
    bottom: 0,
    left: '15%',
    right: '15%',
    backgroundColor: theme.palette.background.paper,
    transform: 'translateY(30%)',
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: '100%',
    alignSelf: 'stretch',
    textAlign: 'center',
    padding: theme.spacing(0.5),
  },
}))

const Attribute = ({ name }) => {
  const classes = useStyles()
  const [attributes /*, setAttribute */] = useContext(AttributeContext)
  const attributeValue = attributes[name]
  const modifier = attributeToModifier(attributeValue)
  return (
    <div className={classes.contentBuffer}>
      <div data-testid="Attribute" className={classes.root}>
        <Typography className={classes.name} variant="caption">
          {name}
        </Typography>
        <Typography
          data-testid="attribute-value"
          className={classes.value}
          variant="h6"
        >
          {attributeValue}
        </Typography>
        <Typography className={classes.modifier} variant="h6">
          {(modifier > 0 && '+') + modifier}
        </Typography>
      </div>
    </div>
  )
}

Attribute.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Attribute
