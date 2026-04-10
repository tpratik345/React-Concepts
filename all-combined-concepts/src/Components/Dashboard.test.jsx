import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard"
import { BrowserRouter } from "react-router-dom";


test('render dashboard', () => {
    render(
        <BrowserRouter>
            <Dashboard />
        </BrowserRouter>
    )
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
})