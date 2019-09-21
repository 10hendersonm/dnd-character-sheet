import React from 'react'
import { render } from 'utils/test-utils'
import '@testing-library/jest-dom/extend-expect'
import Inspiration from '../Inspiration'

describe('<Inspiration />', () => {
  it('renders', () => {
    render(<Inspiration value={false} />)
  })

  it('shows an icon when inspired', () => {
    const { getByTestId } = render(<Inspiration value={true} />)
    expect(getByTestId('Inspiration-true')).toBeInTheDocument()
  })

  it('shows an empty placeholder when uninspired', () => {
    const { getByTestId } = render(<Inspiration value={false} />)
    expect(getByTestId('Inspiration-false')).toBeInTheDocument()
  })

  it('shows no empty placeholder when inspired', () => {
    const { queryByTestId } = render(<Inspiration value={true} />)
    expect(queryByTestId('Inspiration-false')).not.toBeInTheDocument()
  })

  it('shows no icon when uninspired', () => {
    const { queryByTestId } = render(<Inspiration value={false} />)
    expect(queryByTestId('Inspiration-true')).not.toBeInTheDocument()
  })

  it('uses a squared <RightLabelBox />', () => {
    const { getByTestId } = render(<Inspiration value={false} />)
    expect(getByTestId('RightLabelBox-value')).not.toHaveStyle(
      'border-radius: 100%'
    )
  })
})
