import { render, screen } from '@testing-library/react';
import Counter from './Counter';
import user from '@testing-library/user-event';

describe('Counter', () => {
    test('render component', () => {
        render(<Counter />);
        const countElement = screen.getByRole('heading');
        expect(countElement).toBeInTheDocument()
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        });
        expect(incrementButton).toBeInTheDocument()
    })

    test('renders count of 0', () => {
        render(<Counter />);
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('0');
    })

    test('renders a count of 1 after clicking the increment button', async () => {
        user.setup();
        render(<Counter />);
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        });
        await user.click(incrementButton);
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('1');
    })

    test('renders a count of 2 after clicking twice the increment button', async () => {
        user.setup();
        render(<Counter />);
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        });
        await user.dblClick(incrementButton);
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('2');
    })

    test('set button is present', () => {
        render(<Counter />);
        const buttonElement = screen.getByRole('button', {
            name: 'Set'
        })
        expect(buttonElement).toBeInTheDocument();
    })

    test('render count of 10 after clicking set button', async () => {
        user.setup();
        render(<Counter />);
        const inputElement = screen.getByRole('spinbutton');
        await user.type(inputElement, '10');
        expect(inputElement).toHaveValue(10);
        const buttonElement = screen.getByRole('button', {
            name: 'Set'
        })
        await user.click(buttonElement);
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('10');
    })

    test('elements are focused in right order', async () => {
        user.setup();
        render(<Counter />);
        const incrementElement = screen.getByRole('button', {
            name: 'Increment'
        })
        const setElement = screen.getByRole('button', {
            name: 'Set'
        })
        const inputElement = screen.getByRole('spinbutton');
        await user.tab();
        expect(incrementElement).toHaveFocus();
        await user.tab();
        expect(inputElement).toHaveFocus();
        await user.tab();
        expect(setElement).toHaveFocus();
    })

    test('clear the input element', async () => {
        user.setup();
        render(<Counter />);
        const inputElement = screen.getByRole('spinbutton');
        await user.type(inputElement, '10');
        expect(inputElement).toHaveValue(10);
        await user.clear(inputElement);
        expect(inputElement).toHaveValue(null);
    })
});