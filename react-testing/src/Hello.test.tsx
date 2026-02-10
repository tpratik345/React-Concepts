// src/components/Hello.test.tsx
import { render, screen } from '@testing-library/react'
import { Hello } from './Hello'

test('renders greeting', () => {
  render(<Hello />)
  expect(screen.getByText(/hello vite/i)).toBeInTheDocument()
})
