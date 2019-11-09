import React from 'react'
import { render, cleanup } from 'utils/test-utils'
import '@testing-library/jest-dom/extend-expect'
import SkillProficiency from '../SkillProficiency'
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

describe('<SkillProficiency />', () => {
  it('renders', () => {
    renderWithContext(
      <SkillProficiency
        name="Acrobatics"
        proficient
        baseAttribute="Dexterity"
      />,
      [{ Dexterity: 14 }, null],
      [2, null]
    )
  })

  it('displays the skill name', () => {
    const skillName = 'Knot Tying'
    const { getByTestId } = renderWithContext(
      <SkillProficiency name={skillName} />,
      [{ 'Knot Tying': 14 }, null],
      [2, null]
    )
    expect(getByTestId('SkillProficiency-Name').textContent).toBe(skillName)
  })

  it('displays unsigned skill values of 0', () => {
    const { getByTestId } = renderWithContext(
      <SkillProficiency name="Netflix Binging" />,
      [{ 'Netflix Binging': 10 }, null],
      [2, null]
    )
    expect(getByTestId('SkillProficiency-Value')).toHaveTextContent('0')
  })

  it('displays the positive-signed skill value', () => {
    const { getByTestId } = renderWithContext(
      <SkillProficiency name="Spawn Camping" />,
      [{ 'Spawn Camping': 12 }, null],
      [2, null]
    )
    expect(getByTestId('SkillProficiency-Value')).toHaveTextContent('+1')
  })

  it('displays negative-signed skill values', () => {
    const { getByTestId } = renderWithContext(
      <SkillProficiency name="Hot Dog Eating" />,
      [{ 'Hot Dog Eating': 9 }, null],
      [2, null]
    )
    expect(getByTestId('SkillProficiency-Value')).toHaveTextContent('-1')
  })

  it('displays the truncated base attribute', () => {
    const { getByTestId } = renderWithContext(
      <SkillProficiency baseAttribute="Dexterity" name="Defenestration" />,
      [{ Dexterity: 10 }, null],
      [2, null]
    )
    expect(getByTestId('SkillProficiency-BaseAttribute')).toHaveTextContent(
      '(Dex)'
    )
  })

  it('does not display the base attribute () when no base attribute is applied', () => {
    const { queryByTestId } = renderWithContext(
      <SkillProficiency name="Pro Gamer Moves" value={0} />,
      [{ 'Pro Gamer Moves': 10 }, null],
      [2, null]
    )
    expect(
      queryByTestId('SkillProficiency-BaseAttribute')
    ).not.toBeInTheDocument()
  })

  it('displays a nonproficient icon when no proficiency is passed', () => {
    const { getByTestId } = renderWithContext(
      <SkillProficiency name="Light Weapons" />,
      [{ 'Light Weapons': 10 }, null],
      [2, null]
    )
    expect(getByTestId('SkillProficiency-Unproficient')).toBeInTheDocument()
  })

  it('displays a nonproficient icon when proficiency is passed as false', () => {
    const { getByTestId } = renderWithContext(
      <SkillProficiency proficient={false} name="Dark Weapons" />,
      [{ 'Dark Weapons': 10 }, null],
      [2, null]
    )
    expect(getByTestId('SkillProficiency-Unproficient')).toBeInTheDocument()
  })

  it('displays a nonproficient icon when proficiency is passed as 0', () => {
    const { getByTestId } = renderWithContext(
      <SkillProficiency proficient={0} name="Asking Clarifying Questions" />,
      [{ 'Asking Clarifying Questions': 10 }, null],
      [2, null]
    )
    expect(getByTestId('SkillProficiency-Unproficient')).toBeInTheDocument()
  })

  it('displays a proficient icon when proficiency is passed as a flag', () => {
    const { getByTestId } = renderWithContext(
      <SkillProficiency proficient name="Olympic Diving" />,
      [{ 'Olympic Diving': 10 }, null],
      [2, null]
    )
    expect(getByTestId('SkillProficiency-Proficient')).toBeInTheDocument()
  })

  it('displays a proficient icon when proficiency is passed as true', () => {
    const { getByTestId } = renderWithContext(
      <SkillProficiency proficient={true} name="Community Service" />,
      [{ 'Community Service': 10 }, null],
      [2, null]
    )
    expect(getByTestId('SkillProficiency-Proficient')).toBeInTheDocument()
  })

  it('displays a proficient icon when proficiency is passed as 1', () => {
    const { getByTestId } = renderWithContext(
      <SkillProficiency proficient={1} name="Basement Dwelling" />,
      [{ 'Basement Dwelling': 10 }, null],
      [2, null]
    )
    expect(getByTestId('SkillProficiency-Proficient')).toBeInTheDocument()
  })

  it('displays an expertise icon when proficiency is passed as 2', () => {
    const { getByTestId } = renderWithContext(
      <SkillProficiency proficient={2} name="Curling" />,
      [{ Curling: 10 }, null],
      [2, null]
    )

    expect(getByTestId('SkillProficiency-Expert')).toBeInTheDocument()
  })

  it('adds attributes and proficiency together successfully', () => {
    const attributeMap = {
      3: -4,
      4: -3,
      5: -3,
      6: -2,
      7: -2,
      8: -1,
      9: -1,
      10: 0,
      11: 0,
      12: 1,
      13: 1,
      14: 2,
      15: 2,
      16: 3,
      17: 3,
      18: 4,
      19: 4,
      20: 5,
    }
    for (var proficiency = 0; proficiency <= 2; proficiency++) {
      const entries = Object.entries(attributeMap)
      for (var i = 0; i < entries.length; i++) {
        const [attribute, modifier] = entries[i]
        const proficiencyBonus = 2
        const { getByTestId } = renderWithContext(
          <SkillProficiency
            name="Stealth"
            baseAttribute="Dexterity"
            proficient={proficiency}
          />,
          [{ Dexterity: attribute }, null],
          [proficiencyBonus, null]
        )

        const profFinal = proficiency * proficiencyBonus
        const skillModifier = modifier + profFinal
        const sign = skillModifier > 0 ? '+' : skillModifier < 0 ? '-' : ''
        const textContent = `${sign}${Math.abs(skillModifier)}`

        expect(getByTestId('SkillProficiency-Value')).toHaveTextContent(
          textContent
        )
        cleanup()
      }
    }
  })
})
