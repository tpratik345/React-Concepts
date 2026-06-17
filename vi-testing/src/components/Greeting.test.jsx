import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"
import { describe, expect, it } from "vitest"

describe('Greeting Component', () => {
    it('Component default renders', () => {
        render(<Greeting />)
        const text = screen.getByRole('heading', { level: 1 })
        // const text = screen.getByText('Hi World!')
        expect(text).toBeInTheDocument();
    })

    it('Component props renders', () => {
        render(<Greeting name={'Pratik'}/>)
        const text = screen.getByRole('heading', { level: 1 })
        // const text = screen.getByText('Hi Pratik!')
        expect(text).toBeInTheDocument();
    })
})