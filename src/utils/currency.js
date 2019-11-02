export const gold = 1
export const platinum = gold * 10
export const electrum = gold / 2
export const silver = gold / 10
export const copper = silver / 10

const sortedCurrencyRates = {
  platinum,
  gold,
  electrum,
  silver,
  copper,
}

const convertGoldToExactCoins = baseGoldValue => {
  var goldValue = baseGoldValue
  var coins = []
  const currencies = Object.entries(sortedCurrencyRates)
  for (var i = 0; i < currencies.length; i++) {
    const [currencyName, currencyGoldValue] = currencies[i]
    if (goldValue > currencyGoldValue) {
      const [firstLetter] = currencyName
      const coinCount = Math.floor(goldValue / currencyGoldValue)
      coins.push(`${coinCount} ${firstLetter.toUpperCase()}P`)
      goldValue -= coinCount * currencyGoldValue
    }
  }
  return coins.join(', ')
}

const convertGoldToRelevantFigure = goldValue => {
  const currencies = Object.entries(sortedCurrencyRates)
  for (var i = 0; i < currencies.length; i++) {
    const [currencyName, currencyGoldValue] = currencies[i]
    if (goldValue > currencyGoldValue) {
      const [firstLetter] = currencyName
      const coinCount = Math.floor(goldValue / currencyGoldValue)
      const exact = coinCount === goldValue / currencyGoldValue
      return `${exact ? '' : '~'}${coinCount} ${firstLetter.toUpperCase()}P`
    }
  }
}

export const convertGold = (goldValue, exact = true) => {
  if (exact) return convertGoldToExactCoins(goldValue)
  return convertGoldToRelevantFigure(goldValue)
}
