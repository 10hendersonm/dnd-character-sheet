import React from 'react'
import { render } from 'utils/test-utils'
import '@testing-library/jest-dom/extend-expect'
import CharacterCombat from '../CharacterCombat'

describe('<CharacterCombat />', () => {
  it('renders', () => {
    render(<CharacterCombat />)
  })

  it('uses a <SheetColumn />', () => {
    const { getByTestId } = render(<CharacterCombat />)
    expect(getByTestId('SheetColumn')).toBeInTheDocument()
  })

  it('provides <CharacterDefense />', () => {
    const { getByTestId } = render(<CharacterCombat />)
    expect(getByTestId('CharacterDefense')).toBeInTheDocument()
  })

  // it('provides <CharacterOffense />', () => {
  //   const { getByTestId } = render(<CharacterCombat />)
  //   expect(getByTestId('CharacterOffense')).toBeInTheDocument()
  // })

  // it('provides <CharacterEquipment />', () => {
  //   const { getByTestId } = render(<CharacterCombat />)
  //   expect(getByTestId('CharacterEquipment')).toBeInTheDocument()
  // })
})
