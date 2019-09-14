import React from 'react'
import { render } from 'test-utils'
import '@testing-library/jest-dom/extend-expect'
import Attribute from '../Attribute'

const baseConsoleError = global.console.error

const isPropTypeFailure = (...args) => {
  const propTypeFailures = [/Failed prop type/, /Warning: Received/]
  return propTypeFailures.some(p => p.test(args[0]))
}

describe('<Attribute />', () => {
  it('renders', () => {
    render(<Attribute name="Strength" value={10} />)
  })

  it('shows the attribute name', () => {
    const attributeName = 'Dexterity'
    const { getByText } = render(<Attribute name={attributeName} value={10} />)
    expect(getByText(attributeName)).toBeInTheDocument()
  })

  it('shows the attribute value', () => {
    const attributeValue = 17
    const { getByText } = render(
      <Attribute name="Constitution" value={attributeValue} />
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
    const { getByText, rerender } = render(
      <Attribute name="Intelligence" value={10} />
    )
    Object.entries(attributeModifierMap).forEach(([attribute, modifier]) => {
      rerender(<Attribute name="Intelligence" value={parseInt(attribute)} />)
      expect(getByText(modifier)).toBeInTheDocument()
    })
  })
})
