import React from 'react'
import { render } from 'utils/test-utils'
import '@testing-library/jest-dom/extend-expect'
import BottomLabelContainer from '../BottomLabelContainer'

describe('<BottomLabelContainer/>', () => {
  it('renders', () => {
    render(<BottomLabelContainer label="" />)
  })

  it('displays the label', () => {
    const labelText = 'Wash cold with like colors'
    const { baseElement } = render(<BottomLabelContainer label={labelText} />)
    expect(baseElement).toHaveTextContent(labelText)
  })

  it('renders children', () => {
    const childTestId = 'Lab Rat'
    const { getByTestId } = render(
      <BottomLabelContainer label="">
        <div data-testid={childTestId} />
      </BottomLabelContainer>
    )
    expect(getByTestId(childTestId)).toBeInTheDocument()
  })
})
