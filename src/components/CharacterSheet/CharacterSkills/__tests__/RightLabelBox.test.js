import React from 'react'
import { render } from 'utils/test-utils'
import '@testing-library/jest-dom/extend-expect'
import RightLabelBox from '../RightLabelBox'

describe('<RightLabelBox />', () => {
  it('renders', () => {
    render(<RightLabelBox label="" />)
  })

  it('shows the passed value', () => {
    const value = 'Gold'
    const { getByTestId } = render(<RightLabelBox label="" value={value} />)
    expect(getByTestId('RightLabelBox-value')).toHaveTextContent(value)
  })

  it('shows the passed label', () => {
    const label = 'Warner Music Group'
    const { getByTestId } = render(<RightLabelBox label={label} />)
    expect(getByTestId('RightLabelBox-label')).toHaveTextContent(label)
  })

  it('passes extra props to the root div', () => {
    const styleProp = { backgroundColor: 'blue' }
    const { getByTestId } = render(<RightLabelBox label="" style={styleProp} />)
    expect(getByTestId('RightLabelBox')).toHaveStyle('background-color: blue')
  })
})
