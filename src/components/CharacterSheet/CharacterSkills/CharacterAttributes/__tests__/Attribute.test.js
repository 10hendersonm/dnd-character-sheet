import React from 'react'
import { render } from 'utils/test-utils'
import '@testing-library/jest-dom/extend-expect'
import Attribute from '../Attribute'
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

describe('<Attribute />', () => {
  it('renders', () => {
    renderWithContext(<Attribute name="Strength" />)
  })

  it('shows the attribute name', () => {
    const attributeName = 'Dexterity'
    const { getByText } = renderWithContext(<Attribute name={attributeName} />)
    expect(getByText(attributeName)).toBeInTheDocument()
  })

  it('shows the attribute value', () => {
    const attributeValue = 17
    const attributeName = 'Constitution'
    const { getByText } = renderWithContext(
      <Attribute name={attributeName} />,
      [{ [attributeName]: attributeValue }]
    )
    expect(getByText(attributeValue.toString())).toBeInTheDocument()
  })

  it('shows the correct attribute modifier', () => {
    const attributeModifierMap = {
      3: '-4',
      4: '-3',
      5: '-3',
      6: '-2',
      7: '-2',
      8: '-1',
      9: '-1',
      10: '0',
      11: '0',
      12: '+1',
      13: '+1',
      14: '+2',
      15: '+2',
      16: '+3',
      17: '+3',
      18: '+4',
      19: '+4',
      20: '+5',
    }
    const { getByText, rerender } = renderWithContext(
      <Attribute name="Intelligence" />
    )
    Object.entries(attributeModifierMap).forEach(([attribute, modifier]) => {
      rerender(
        <AttributeContext.Provider value={[{ Intelligence: attribute }]}>
          <ProficiencyBonusContext.Provider value={[2, null]}>
            <Attribute name="Intelligence" value={parseInt(attribute)} />
          </ProficiencyBonusContext.Provider>
        </AttributeContext.Provider>
      )
      expect(getByText(modifier)).toBeInTheDocument()
    })
  })
})
