/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Testing <FirstApp />', () => {
    // Constants
    const title = 'Hola, soy Goku';
    const subTitle = 'No me gusta Vegetta';
    // const name = 'Javier Saez'

    test('should match with the snapshot', () => {
        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();
    });
    test('should display the message "Hola, soy Goku"', () => {        
        render(<FirstApp title={title} />);        
        expect(screen.getByText(title)).toBeTruthy();
        // screen.debug();
    });
    test('should display the title in <h1> tag', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    });
    test('should display the subtitle', () => {
        render(<FirstApp title={title} subTitle={subTitle} />);
        // expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(subTitle);
        expect( screen.getAllByText(subTitle).length ).toBe(4);
    });
});

