import React from 'react'
import { render } from 'utils/test-utils'
import '@testing-library/jest-dom/extend-expect'
import SkillProficiency from '../SkillProficiency'

describe('<SkillProficiency />', () => {
  it('renders', () => {
    render(
      <SkillProficiency
        name="Acrobatics"
        value={3}
        proficient
        baseAttribute="Dexterity"
      />
    )
  })

  it('displays the skill name', () => {
    const skillName = 'Knot Tying'
    const { getByTestId } = render(
      <SkillProficiency name={skillName} value={0} />
    )
    expect(getByTestId('SkillProficiency-Name').textContent).toBe(skillName)
  })

  it('displays unsigned skill values of 0', () => {
    const { getByTestId } = render(
      <SkillProficiency name="Netflix Binging" value={0} />
    )
    expect(getByTestId('SkillProficiency-Value')).toHaveTextContent('0')
  })

  it('displays the positive-signed skill value', () => {
    const { getByTestId } = render(
      <SkillProficiency name="Spawn Camping" value={1} />
    )
    expect(getByTestId('SkillProficiency-Value')).toHaveTextContent('+1')
  })

  it('displays the negative-signed skill value', () => {
    const { getByTestId } = render(
      <SkillProficiency name="Hot Dog Eating" value={-1} />
    )
    expect(getByTestId('SkillProficiency-Value')).toHaveTextContent('-1')
  })

  it('displays the truncated base attribute', () => {
    const { getByTestId } = render(
      <SkillProficiency
        baseAttribute="Dexterity"
        name="Defenestration"
        value={0}
      />
    )
    expect(getByTestId('SkillProficiency-BaseAttribute')).toHaveTextContent(
      '(Dex)'
    )
  })

  it('does not display the base attribute () when no base attribute is applied', () => {
    const { queryByTestId } = render(
      <SkillProficiency name="Pro Gamer Moves" value={0} />
    )
    expect(
      queryByTestId('SkillProficiency-BaseAttribute')
    ).not.toBeInTheDocument()
  })

  it('displays a nonproficient icon when no proficiency is passed', () => {
    const { getByTestId } = render(
      <SkillProficiency name="Light Weapons" value={0} />
    )
    expect(getByTestId('SkillProficiency-Unproficient')).toBeInTheDocument()
  })

  it('displays a nonproficient icon when proficiency is passed as false', () => {
    const { getByTestId } = render(
      <SkillProficiency proficient={false} name="Dark Weapons" value={0} />
    )
    expect(getByTestId('SkillProficiency-Unproficient')).toBeInTheDocument()
  })

  it('displays a nonproficient icon when proficiency is passed as 0', () => {
    const { getByTestId } = render(
      <SkillProficiency
        proficient={0}
        name="Asking Clarifying Questions"
        value={0}
      />
    )
    expect(getByTestId('SkillProficiency-Unproficient')).toBeInTheDocument()
  })

  it('displays a proficient icon when proficiency is passed as a flag', () => {
    const { getByTestId } = render(
      <SkillProficiency proficient name="Olympic Diving" value={0} />
    )
    expect(getByTestId('SkillProficiency-Proficient')).toBeInTheDocument()
  })

  it('displays a proficient icon when proficiency is passed as true', () => {
    const { getByTestId } = render(
      <SkillProficiency proficient={true} name="Community Service" value={0} />
    )
    expect(getByTestId('SkillProficiency-Proficient')).toBeInTheDocument()
  })

  it('displays a proficient icon when proficiency is passed as 1', () => {
    const { getByTestId } = render(
      <SkillProficiency proficient={1} name="Basement Dwelling" value={0} />
    )
    expect(getByTestId('SkillProficiency-Proficient')).toBeInTheDocument()
  })

  it('displays an expertise icon when proficiency is passed as 2', () => {
    const { getByTestId } = render(
      <SkillProficiency proficient={2} name="Curling" value={0} />
    )
    expect(getByTestId('SkillProficiency-Expert')).toBeInTheDocument()
  })
})
