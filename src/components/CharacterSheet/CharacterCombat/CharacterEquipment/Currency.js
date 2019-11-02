import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Tooltip } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(0.5),
  },
  label: {
    borderLeft: `1px solid ${theme.palette.text.primary}`,
    borderTop: `1px solid ${theme.palette.text.primary}`,
    borderBottom: `1px solid ${theme.palette.text.primary}`,
    borderRadius: 5,
    fontSize: '80%',
    backgroundColor: theme.palette.background.default,
    flex: '0 0 30%',
    display: 'flex',
    justifyContent: 'center',
  },
  value: {
    borderLeft: `3px double ${theme.palette.text.primary}`,
    borderRight: `3px double ${theme.palette.text.primary}`,
    borderTop: `1px solid ${theme.palette.text.primary}`,
    borderBottom: `1px solid ${theme.palette.text.primary}`,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    borderRadius: 10,
    flex: '1 1 100%',
    display: 'flex',
    justifyContent: 'center',
  },
}))

const Currency = ({ type, value }) => {
  const [initial, ...rest] = type
  const classes = useStyles()
  const capitalizedType =
    initial.toUpperCase() + rest.map(letter => letter.toLowerCase()).join('')
  const title = `${value} ${capitalizedType} Piece${value !== 1 ? 's' : ''}`
  return (
    <Tooltip title={title} placement="left">
      <div className={classes.root}>
        <div className={classes.label}>{`${initial.toUpperCase()}P`}</div>
        <div className={classes.value}>{value}</div>
      </div>
    </Tooltip>
  )
}

export default Currency
