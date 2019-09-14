import React from 'react'
import { render } from 'test-utils'
import '@testing-library/jest-dom/extend-expect'
import CharacterDetail from '../CharacterDetail'

describe('<CharacterDetail />', () => {
  it('renders', () => {
    render(<CharacterDetail type="Player Name" />)
  })

  it('contains a text field', () => {
    const { getByTestId } = render(<CharacterDetail type="Background" />)
    expect(getByTestId('CharacterDetail-TextField')).toBeInTheDocument()
  })

  it('passes the type as helpertext', () => {
    const detailType = 'Class & Level'
    const { getByText } = render(<CharacterDetail type={detailType} />)
    expect(getByText(detailType)).toBeInTheDocument()
  })
})
