import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../src/app/page'

describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
  })

  it('renders heading with correct text content', () => {
    render(<Page />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Home')
  })

  it('renders a link to about page', () => {
    render(<Page />)
    const link = screen.getByRole('link', { name: /about/i })
    expect(link).toBeInTheDocument()
  })

  it('link has correct href attribute', () => {
    render(<Page />)
    const link = screen.getByRole('link', { name: /ABOut/i })
    expect(link).toHaveAttribute('href', '/about')
  })

  it('link is accessible with correct role and name', () => {
    render(<Page />)
    const link = screen.getByRole('link', { name: 'About' })
    expect(link).toBeInTheDocument()
  })

})