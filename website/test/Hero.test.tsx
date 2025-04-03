import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Hero from '../src/components/Hero'
 
describe('Hero', () => {
  it('renders a heading', () => {
    render(<Hero />)
 
    const heading = screen.getByRole('heading', { level: 1 })
    const cta = screen.getByRole('button')
 
    expect(heading).toBeInTheDocument()
    expect(cta).toBeInTheDocument()
  })
})