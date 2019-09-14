import React from 'react'
import { render } from 'test-utils'
import '@testing-library/jest-dom/extend-expect'
import CharacterName from '../CharacterName'

describe('<CharacterName />', () => {
  it('renders', () => {
    render(<CharacterName />)
  })

  it('shows the game name', () => {
    const { getByText } = render(<CharacterName />)
    expect(getByText('Dungeons & Dragons')).toBeInTheDocument()
  })

  it('has the character name input', () => {
    const { getByText } = render(<CharacterName />)
    expect(getByText('Character Name')).toBeInTheDocument()
  })
})
