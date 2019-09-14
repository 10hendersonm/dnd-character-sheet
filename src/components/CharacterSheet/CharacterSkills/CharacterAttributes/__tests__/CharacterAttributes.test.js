import React from 'react'
import { render } from 'test-utils'
import { getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import CharacterAttributes from '../CharacterAttributes'

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
    render(<CharacterAttributes />)
  })

  it('shows all attributes', () => {
    const { getByText } = render(<CharacterAttributes />)
    attributes.forEach(attribute => {
      expect(getByText(attribute)).toBeInTheDocument()
    })
  })

  it('does not show any extra attributes', () => {
    const { getAllByTestId } = render(<CharacterAttributes />)
    expect(getAllByTestId('Attribute').length).toBe(attributes.length)
  })

  it('orders the attributes correctly', () => {
    const { getAllByTestId } = render(<CharacterAttributes />)
    const nodes = getAllByTestId('Attribute')
    attributes.forEach((attribute, index) => {
      expect(getByText(nodes[index], attribute)).toBeInTheDocument()
    })
  })

  it('has a base value of 10 for all attributes', () => {
    const { getAllByTestId } = render(<CharacterAttributes />)
    const nodes = getAllByTestId('attribute-value')
    nodes.forEach(node => {
      expect(node.textContent).toBe('10')
    })
  })
})
