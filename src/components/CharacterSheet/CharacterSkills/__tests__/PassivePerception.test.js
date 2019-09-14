import React from 'react'
import { render } from 'utils/test-utils'
import '@testing-library/jest-dom/extend-expect'
import PassivePerception from '../PassivePerception'

describe('<PassivePerception />', () => {
  it('renders', () => {
    render(<PassivePerception />)
  })

  it('displays passed wisdomModifier + 10', () => {
    const { getByTestId } = render(<PassivePerception wisdomModifier={4} />)
    expect(getByTestId('RightLabelBox-value')).toHaveTextContent('14')
  })

  it('displays the proper label', () => {
    const { getByTestId } = render(<PassivePerception wisdomModifier={4} />)
    expect(getByTestId('RightLabelBox-label')).toHaveTextContent(
      'Passive Wisdom (Perception)'
    )
  })
})
