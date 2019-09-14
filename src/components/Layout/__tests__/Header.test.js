import React from 'react'
import { render } from 'utils/test-utils'
import '@testing-library/jest-dom/extend-expect'
import Header from '../Header'

describe('<Header />', () => {
  beforeEach(() => {
    document.title = null
  })

  it('renders', () => {
    render(<Header title="Hello World" />)
  })

  it('displays the title', () => {
    const testTitle = 'Hello World Again'
    const { getByText } = render(<Header title={testTitle} />)
    expect(getByText(testTitle)).toBeInTheDocument()
  })

  it('sets the page title', () => {
    const testTitle = 'Hello World One Last Time'
    render(<Header title={testTitle} />)
    expect(document.title).toBe(testTitle)
  })

  it('resets the page title on re-render', () => {
    const testTitle = 'Goodbye World'
    const { rerender } = render(<Header title={testTitle} />)
    expect(document.title).toBe(testTitle)
    const revisedTestTitle = '1-800-273-8255'
    rerender(<Header title={revisedTestTitle} />)
    expect(document.title).toBe(revisedTestTitle)
  })
})
