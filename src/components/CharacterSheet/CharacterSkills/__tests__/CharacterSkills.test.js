import React from 'react'
import { render } from 'utils/test-utils'
import '@testing-library/jest-dom/extend-expect'
import CharacterSkills from '../CharacterSkills'

describe('<CharacterSkills />', () => {
  it('renders', () => {
    render(<CharacterSkills />)
  })

  it('displays in a <SheetColumn />', () => {
    const { getByTestId } = render(<CharacterSkills />)
    expect(getByTestId('SheetColumn')).toBeInTheDocument()
  })

  it('provides <CharacterAttributes />', () => {
    const { getByTestId } = render(<CharacterSkills />)
    expect(getByTestId('CharacterAttributes')).toBeInTheDocument()
  })

  it('provides <Inspiration />', () => {
    const { getByTestId } = render(<CharacterSkills />)
    expect(getByTestId('Inspiration')).toBeInTheDocument()
  })

  it('provides <ProficiencyBonus />', () => {
    const { getByTestId } = render(<CharacterSkills />)
    expect(getByTestId('ProficiencyBonus')).toBeInTheDocument()
  })

  it('provides <SavingThrows />', () => {
    const { baseElement } = render(<CharacterSkills />)
    expect(baseElement).toHaveTextContent('Saving Throws')
  })

  // it('provides <Skills />', () => {
  //   const { getByTestId } = render(<CharacterSkills />)
  //   expect(getByTestId('Skills')).toBeInTheDocument()
  // })

  // it('provides <PassivePerception />', () => {
  //   const { getByTestId } = render(<CharacterSkills />)
  //   expect(getByTestId('PassivePerception')).toBeInTheDocument()
  // })

  // it('provides <OtherProficiencies />', () => {
  //   const { getByTestId } = render(<CharacterSkills />)
  //   expect(getByTestId('OtherProficiencies')).toBeInTheDocument()
  // })
})
