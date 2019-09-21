import React from 'react'
import { render } from 'utils/test-utils'
import { getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import CharacterMetadata from '../CharacterMetadata'

const characterDetails = [
  'Class & Level',
  'Background',
  'Player Name',
  'Race',
  'Alignment',
  'Experience Points',
]

describe('<CharacterMetadata />', () => {
  it('renders', () => {
    render(<CharacterMetadata />)
  })

  it('provides <CharacterName />', () => {
    const { getByTestId } = render(<CharacterMetadata />)
    expect(getByTestId('CharacterName')).toBeInTheDocument()
  })

  it('provides all <CharacterDetail />s', () => {
    const { getAllByTestId } = render(<CharacterMetadata />)
    const nodes = getAllByTestId('CharacterDetail')
    characterDetails.forEach((characterDetail, index) => {
      expect(getByText(nodes[index], characterDetail)).toBeInTheDocument()
    })
  })

  it('does not provide extra <CharacterDetail />s', () => {
    const { getAllByTestId } = render(<CharacterMetadata />)
    expect(getAllByTestId('CharacterDetail').length).toBe(
      characterDetails.length
    )
  })
})
