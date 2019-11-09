import React from 'react'
import { render } from 'utils/test-utils'
import '@testing-library/jest-dom/extend-expect'
import PassivePerception from '../PassivePerception'
import { AttributeContext, ProficiencyBonusContext } from '../CharacterSkills'

const renderWithContext = (
  component,
  attributeContextValue,
  proficiencyBonusContextValue
) =>
  render(
    <AttributeContext.Provider value={attributeContextValue}>
      <ProficiencyBonusContext.Provider value={proficiencyBonusContextValue}>
        {component}
      </ProficiencyBonusContext.Provider>
    </AttributeContext.Provider>
  )

describe('<PassivePerception />', () => {
  it('renders', () => {
    renderWithContext(<PassivePerception />, [{ Wisdom: 8 }, null], [2, null])
  })

  // TODO make tests for having proficiency or expertise in Perception

  it('displays passed wisdomModifier + 10', () => {
    const { getByTestId } = renderWithContext(
      <PassivePerception />,
      [{ Wisdom: 14 }, null],
      [2, null]
    )
    expect(getByTestId('RightLabelBox-value')).toHaveTextContent('12')
  })

  it('displays the proper label', () => {
    const { getByTestId } = renderWithContext(
      <PassivePerception />,
      [{ Wisdom: 20 }, null],
      [2, null]
    )
    expect(getByTestId('RightLabelBox-label')).toHaveTextContent(
      'Passive Wisdom (Perception)'
    )
  })
})
