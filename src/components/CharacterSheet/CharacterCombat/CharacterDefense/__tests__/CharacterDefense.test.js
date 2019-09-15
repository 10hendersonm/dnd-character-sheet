import React from 'react'
import { render } from 'utils/test-utils'
import '@testing-library/jest-dom/extend-expect'
import CharacterDefense from '../CharacterDefense'

describe('<CharacterDefense />', () => {
  it('renders', () => {
    render(<CharacterDefense />)
  })

  it('has a dimmed background', () => {
    const { getByTestId } = render(<CharacterDefense />)
    expect(getByTestId('CharacterDefense')).toHaveStyle(
      'background-color: rgba(0, 0, 0, 0.12)'
    )
  })

  // it('provides <ArmorClass />', () => {
  //   const { getByTestId } = render(<CharacterDefense />)
  //   expect(getByTestId('ArmorClass')).toBeInTheDocument()
  // })
})
