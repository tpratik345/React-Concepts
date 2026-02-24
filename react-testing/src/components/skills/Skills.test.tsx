import { logRoles, render, screen } from "@testing-library/react";
import Skills from "./Skills";


describe('Skills', () => {
    const skills = ['HTML', 'CSS', 'JavaScript'];

    test('render skills component', () => {
        render(<Skills skills={skills} />);
        const listComponent = screen.getByRole('list');
        expect(listComponent).toBeInTheDocument()
    })

    test('render list items', () => {
        render(<Skills skills={skills} />)
        const listItem = screen.getAllByRole('listitem');
        expect(listItem).toHaveLength(skills.length);
    })

    test('render for login button', () => {
        render(<Skills skills={skills} />);
        const buttonElement = screen.getByRole('button', {
            name: 'Login'
        });
        expect(buttonElement).toBeInTheDocument();
    })

    test('render for Start Learning button not present', () => {
        render(<Skills skills={skills} />);
        const buttonElement = screen.queryByRole('button', {
            name: 'Start Learning'
        });
        expect(buttonElement).not.toBeInTheDocument();
    })

    test('render for Start Learning button present after sometime', async () => {
        const view = render(<Skills skills={skills} />);
        // logRoles(view.container)
        // screen.debug();
        const buttonElement = await screen.findByRole('button', {
            name: 'Start Learning'
        },
            { timeout: 2000 }
        );
        // screen.debug();
        expect(buttonElement).toBeInTheDocument();
    })
});