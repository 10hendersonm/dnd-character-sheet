const randBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export const attributeToModifier = attributeValue =>
  Math.round((attributeValue - 11) / 2)

export const statRoll = () => {
  var dice = []
  for (var i = 0; i < 4; i++) {
    dice.push(randBetween(1, 6))
  }
  dice.sort()
  const [, ...top3] = dice
  const stat = top3.reduce((total, num) => total + num)
  return stat
}
