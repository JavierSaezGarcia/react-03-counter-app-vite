/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('Testing in  < CounterApp />', () => {
    
    const initialValue = 10;

    test('should match with the snapshot', () => {        
        const { container } = render(<CounterApp value={initialValue} />);
        expect(container).toMatchSnapshot();
        // screen.debug();
    });
    test('should display initial value to 100', () => {        
        render(<CounterApp value={100} />);
        expect(screen.getByText(100)).toBeTruthy();        
    });
    test('should display an increment with +1 button', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1')); // Simulate click
        expect(screen.getByText('11')).toBeTruthy(); // Test the result of the click
    });
    test('should display an decrement with -1 button', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('-1')); // Simulate click
        // screen.debug();
        expect(screen.getByText('9')).toBeTruthy(); // Test the result of the click
    });
    test('should display an reset with reset button', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        // fireEvent.click(screen.getByText('Reset')); // Simulate click
        // screen.debug();
        // expect(screen.getByText('10')).toBeTruthy(); // Test the result of the click
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
        expect(screen.getByText('10')).toBeTruthy();
    });

});

