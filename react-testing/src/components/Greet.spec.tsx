import { render, screen } from "@testing-library/react";
import Greet from "../components/Greet"

describe('Greet', () => {
    it('Greet renders successfully', () => {
        render(<Greet />);
        const textElement = screen.getByText(/Hi/i)
        expect(textElement).toBeInTheDocument();
    })
    
    it('Greet renders when passed props', () => {
        render(<Greet name="Pratik"/>);
        const textElement = screen.getByText('Hi Pratik')
        expect(textElement).toBeInTheDocument();
    })
})



