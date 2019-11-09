import React from 'react'
import { render, getByTestId } from 'utils/test-utils'
import '@testing-library/jest-dom/extend-expect'
import { AttributeContext, ProficiencyBonusContext } from '../CharacterSkills'
import Skills from '../Skills'

const renderWithContext = () =>
  render(
    <ProficiencyBonusContext.Provider value={[2, null]}>
      <AttributeContext.Provider value={[{ Wisdom: 14 }, null]}>
        <Skills />
      </AttributeContext.Provider>
    </ProficiencyBonusContext.Provider>
  )

const skills = {
  Acrobatics: 'Dex',
  'Animal Handling': 'Wis',
  Arcana: 'Int',
  Athletics: 'Str',
  Deception: 'Cha',
  History: 'Int',
  Insight: 'Wis',
  Intimidation: 'Cha',
  Investigation: 'Int',
  Medicine: 'Wis',
  Nature: 'Int',
  Perception: 'Wis',
  Performance: 'Cha',
  Persuasion: 'Cha',
  Religion: 'Int',
  'Sleight of Hand': 'Dex',
  Stealth: 'Dex',
  Survival: 'Wis',
}

describe('<Skills />', () => {
  it('renders', () => {
    renderWithContext()
  })

  it('displays in a <BottomLabelContainer />', () => {
    const { getByTestId } = renderWithContext()
    expect(getByTestId('BottomLabelContainer')).toBeInTheDocument()
  })

  it('has the correct number of skills', () => {
    const { getAllByTestId } = renderWithContext()
    const nodes = getAllByTestId('SkillProficiency')
    expect(nodes.length).toBe(Object.keys(skills).length)
  })

  it('has all skills with base attributes', () => {
    const { getAllByTestId } = renderWithContext()
    const nodes = getAllByTestId('SkillProficiency')
    Object.entries(skills).forEach(([skillName, baseAttribute], index) => {
      const node = nodes[index]
      expect(getByTestId(node, 'SkillProficiency-Name').textContent).toBe(
        skillName
      )
      expect(
        getByTestId(node, 'SkillProficiency-BaseAttribute').textContent
      ).toBe(`(${baseAttribute})`)
    })
  })
})
