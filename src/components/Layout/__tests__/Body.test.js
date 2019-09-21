import React from 'react'
import { render } from 'utils/test-utils'
import '@testing-library/jest-dom/extend-expect'
import Body from '../Body'

describe('<Body />', () => {
  it('renders', () => {
    render(<Body />)
  })

  it('passes children', () => {
    const childTestId = 'Mcaulay Culkin'
    const { getByTestId } = render(
      <Body>
        <div data-testid={childTestId} />
      </Body>
    )
    expect(getByTestId(childTestId)).toBeInTheDocument()
  })
})
