import { render, screen, waitFor } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import userEvent from "@testing-library/user-event";
import UserProfile from "./UserProfile";

describe('User Profile Component', () => {

    beforeEach(() => {
        global.fetch = vi.fn();
    })

    afterEach(() => {
        vi.resetAllMocks();
    })

    it('Fetch and display user data', async () => {
        global.fetch.mockResolvedValueOnce({
            json: async () => ({
                id: 4,
                name: 'Pratik',
                email: 'pratik@gmail.com'
            })
        })
        render(<UserProfile userId={4}/>)

        const loadingText = screen.getByText(/loading/i);
        expect(loadingText).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByRole('heading')).toBeInTheDocument();
            expect(screen.getByRole('heading').textContent).toEqual('Pratik');
        })

        // await waitFor(async () => {
        //     const text = await screen.findByRole('heading')
        //     expect(text).toBeInTheDocument();
        //     expect(text.textContent).toEqual('Pratik');
        // })
    })
})