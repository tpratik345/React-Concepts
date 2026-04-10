import { render, screen } from '@testing-library/react'
import App from './App'
import { AuthProvider } from './auth/AuthContext'
import { BrowserRouter } from 'react-router-dom'
import { expect } from 'vitest'
import userEvent from '@testing-library/user-event'

test('renders Vite text', () => {
    render(
        <BrowserRouter>
            <AuthProvider>
                <App />
            </AuthProvider>
        </BrowserRouter>
    )
    expect(screen.getByText(/home/i)).toBeInTheDocument()
})

test('testing button click', async () => {
    render(
        <BrowserRouter>
            <AuthProvider>
                <App />
            </AuthProvider>
        </BrowserRouter>
    )
    const logout = screen.getByText(/logout/i);
    await userEvent.click(logout);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
})
