import React from 'react'
import { render } from 'utils/test-utils'
import '@testing-library/jest-dom/extend-expect'
import OtherProficiencies from '../OtherProficiencies'

describe('<OtherProficiencies />', () => {
  it('renders', () => {
    render(<OtherProficiencies />)
  })

  it('has the correct label', () => {
    const { getByText } = render(<OtherProficiencies />)
    expect(getByText('Other Proficiencies & Languages')).toBeInTheDocument()
  })
})
