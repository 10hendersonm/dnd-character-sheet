import React from 'react'
import { render } from 'utils/test-utils'
import '@testing-library/jest-dom/extend-expect'
import CharacterDetail from '../CharacterDetail'

describe('<CharacterDetail />', () => {
  it('renders', () => {
    render(<CharacterDetail type="Player Name" value="Marty" />)
  })

  it('contains a text field', () => {
    const { getByTestId } = render(
      <CharacterDetail type="Background" value="Folk Hero" />
    )
    expect(getByTestId('CharacterDetail-TextField')).toBeInTheDocument()
  })

  it('passes the type as helpertext', () => {
    const detailType = 'Class & Level'
    const { getByText } = render(
      <CharacterDetail type={detailType} value="Druid - 1" />
    )
    expect(getByText(detailType)).toBeInTheDocument()
  })

  it('passes the value to the input', () => {
    const detailValue = '9001'
    const { getByDisplayValue } = render(
      <CharacterDetail type="Experience Points" value={detailValue} />
    )
    expect(getByDisplayValue(detailValue)).toBeInTheDocument()
  })
})
