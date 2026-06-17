import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import Counter from "./Counter"
import userEvent from "@testing-library/user-event";

describe('Counter Component', () => {
    it('increment counter on btn click', async () => {
        render(<Counter />)
        const btn = screen.getByRole('button', { name: 'Increment'} );
        const counterValue = screen.getByTestId('counter-value');
        expect(counterValue.textContent).toEqual('0')
        
        await userEvent.click(btn);
        // await userEvent.type(input, 'Pratik')
        expect(counterValue.textContent).toEqual('1')
    })
})