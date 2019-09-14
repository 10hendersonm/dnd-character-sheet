const attributeMap = {
  Strength: 'Strength',
  Dexterity: 'Dexterity',
  Constitution: 'Constitution',
  Intelligence: 'Intelligence',
  Wisdom: 'Wisdom',
  Charisma: 'Charisma',
}

export const attributes = Object.values(attributeMap)

export const skills = {
  Acrobatics: attributeMap.Dexterity,
  'Animal Handling': attributeMap.Wisdom,
  Arcana: attributeMap.Intelligence,
  Athletics: attributeMap.Strength,
  Deception: attributeMap.Charisma,
  History: attributeMap.Intelligence,
  Insight: attributeMap.Wisdom,
  Intimidation: attributeMap.Charisma,
  Investigation: attributeMap.Intelligence,
  Medicine: attributeMap.Wisdom,
  Nature: attributeMap.Intelligence,
  Perception: attributeMap.Wisdom,
  Performance: attributeMap.Charisma,
  Persuasion: attributeMap.Charisma,
  Religion: attributeMap.Intelligence,
  'Sleight of Hand': attributeMap.Dexterity,
  Stealth: attributeMap.Dexterity,
  Survival: attributeMap.Wisdom,
}
