import React from 'react'
import { render } from 'utils/test-utils'
import '@testing-library/jest-dom/extend-expect'
import ProficiencyBonus from '../ProficiencyBonus'

describe('<ProficiencyBonus />', () => {
  it('renders', () => {
    render(<ProficiencyBonus value={0} />)
  })

  it('displays the value with a + before it', () => {
    const { getByText } = render(<ProficiencyBonus value={5} />)
    expect(getByText('+5')).toBeInTheDocument()
  })

  it('uses a rounded <RightLabelBox />', () => {
    const { getByTestId } = render(<ProficiencyBonus value={0} />)
    expect(getByTestId('RightLabelBox-value')).toHaveStyle(
      'border-radius: 100%'
    )
  })
})
