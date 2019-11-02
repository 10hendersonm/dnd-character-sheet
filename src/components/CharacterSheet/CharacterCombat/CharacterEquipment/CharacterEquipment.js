import React from 'react'

import BottomLabelContainer from 'components/Common/BottomLabelContainer'
import CharacterGold from './CharacterGold'

import equipment from 'data/equipment.json'
import { convertGold } from 'utils/currency'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  rowRoot: {
    display: 'flex',
  },
  equipment: {
    flexShrink: 0,
  },
  item: {
    display: 'flex',
    '& > div': {
      padding: theme.spacing(1),
    }
  },
}))

const inventory = {
  'Dagger': 1,
  'Dice Set': 1,
  'Clothes (Common)': 1,
  'Crystal': 1,
  'Spellbook': 1,
  'Backpack': 1,
  'Bedroll': 1,
  'Mess Kit': 1,
  'Tinderbox': 1,
  'Torch': 10,
  'Rations (1 day)': 20,
  'Waterskin (Full)': 4,
  "Healer's Kit": 1,
  'Tent (Two-person)': 1,
  'Bug Salve': 40,
}

const CharacterEquipment = () => {
  const classes = useStyles()
  var totalWeight = 0
  var totalValue = 0
  const inventoryItems = Object.entries(inventory).map(([item, quantity]) => {
    const itemData = equipment.find(({ name }) => name === item)
    const itemValue = itemData && itemData.cost * quantity
    var friendlyValue = 'Unknown'
    if (typeof itemValue === 'number') {
      friendlyValue = convertGold(itemValue, true)
      totalValue += itemValue
    }

    const itemWeight = itemData && itemData.weight * quantity
    var friendlyWeight = 'Unknown'
    if (typeof itemWeight === 'number') {
      friendlyWeight = `${itemWeight}lbs`
      totalWeight += itemWeight
    }

    return (
      <div className={classes.item}>
        <div>{`${quantity} x ${item}`}</div>
        <div>{`Value: ${friendlyValue}`}</div>
        <div>{`Weight: ${friendlyWeight}`}</div>
      </div>
    )
  })
  return (
    <BottomLabelContainer label="Equipment">
      <div className={classes.root}>
        <div className={classes.rowRoot}>
          <CharacterGold value={4.9} />
          <div className={classes.equipment}>
            {inventoryItems}
          </div>
        </div>
        <div>
          {`Total: ~${Math.round(totalValue)}gp, ~${Math.round(totalWeight)}lbs`}
        </div>
      </div>
    </BottomLabelContainer>
  )
}

export default CharacterEquipment