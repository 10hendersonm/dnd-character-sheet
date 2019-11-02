import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Currency from './Currency'

const gold = 1
const platinum = gold * 10
const electrum = gold / 2
const silver = gold / 10
const copper = silver / 10

const currencyRates = {
  platinum,
  gold,
  electrum,
  silver,
  copper,
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
}))

const CharacterGold = ({ value: characterBaseGold }) => {
  const classes = useStyles()
  var characterGold = characterBaseGold
  var wealth = {}
  Object.entries(currencyRates).forEach(([currencyType, currencyGoldValue]) => {
    const coins = Math.floor(characterGold / currencyGoldValue)
    wealth[currencyType] = coins
    characterGold -= coins * currencyGoldValue
  })

  const sortByCurrencyValueAsc = ([a], [b]) =>
    currencyRates[a] > currencyRates[b]
      ? 1
      : currencyRates[a] < currencyRates[b]
      ? -1
      : 0

  return (
    <div className={classes.root}>
      {Object.entries(wealth)
        .sort(sortByCurrencyValueAsc)
        .map(([currencyType, currencyValue]) => (
          <Currency
            key={`characterGold-currency-${currencyType}`}
            type={currencyType}
            value={currencyValue}
          />
        ))}
    </div>
  )
}

export default CharacterGold
