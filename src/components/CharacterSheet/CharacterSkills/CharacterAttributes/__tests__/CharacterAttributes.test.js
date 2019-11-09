import React from 'react'
import { render } from 'utils/test-utils'
import { getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import CharacterAttributes from '../CharacterAttributes'
import {
  AttributeContext,
  ProficiencyBonusContext,
} from '../../CharacterSkills'

const renderWithContext = (
  component,
  attributeContextValue = [
    {
      Strength: 10,
      Dexterity: 10,
      Constitution: 10,
      Intelligence: 10,
      Wisdom: 10,
      Charisma: 10,
    },
    null,
  ],
  proficiencyBonusContextValue = [2, null]
) =>
  render(
    <AttributeContext.Provider value={attributeContextValue}>
      <ProficiencyBonusContext.Provider value={proficiencyBonusContextValue}>
        {component}
      </ProficiencyBonusContext.Provider>
    </AttributeContext.Provider>
  )

const attributes = [
  'Strength',
  'Dexterity',
  'Constitution',
  'Intelligence',
  'Wisdom',
  'Charisma',
]

describe('<CharacterAttributes />', () => {
  it('renders', () => {
    renderWithContext(<CharacterAttributes />)
  })

  it('shows all attributes', () => {
    const { getByText } = renderWithContext(<CharacterAttributes />)
    attributes.forEach(attribute => {
      expect(getByText(attribute)).toBeInTheDocument()
    })
  })

  it('does not show any extra attributes', () => {
    const { getAllByTestId } = renderWithContext(<CharacterAttributes />)
    expect(getAllByTestId('Attribute').length).toBe(attributes.length)
  })

  it('orders the attributes correctly', () => {
    const { getAllByTestId } = renderWithContext(<CharacterAttributes />)
    const nodes = getAllByTestId('Attribute')
    attributes.forEach((attribute, index) => {
      expect(getByText(nodes[index], attribute)).toBeInTheDocument()
    })
  })
})
