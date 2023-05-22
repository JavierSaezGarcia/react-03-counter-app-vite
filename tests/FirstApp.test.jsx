/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Testing <FirstApp />', () => {
    const title = 'Hola, soy Goku';
    const subTitle ='No me gusta Vegetta';
    const name = 'Javier Saez'

    // test('should match with the snapshot', () => {
        
    //     const { container } = render( <FirstApp title={title} subTitle={subTitle} name={name} /> );
    //     expect( container ).toMatchSnapshot();
    // });

    test('Should display the title and subtitle', () => {
        const { getByText, getByTestId  } = render( 
            <FirstApp 
                title={title} 
                subTitle={subTitle} 
                name={name} /> 
            );
        expect( getByText(title) ).toBeTruthy();
        // expect( getByText(subTitle) ).toBeTruthy();

        expect(getByTestId('test-title')).toBeTruthy();
        expect( getByTestId('test-title').innerHTML ).toContain(title); // Contiene el titulo independientemente de los espacios
        expect( getByTestId('test-title').innerHTML ).toBe(title); // Exactamente igual con sus espacios

        // const h1 = container.querySelector('h1');
        // expect( h1.innerHTML ).toBe(title);

        // const h2 = container.querySelector('h2');
        // expect( h2.innerHTML).toContain(subTitle);
       
        
    });

    test('Should display the subtitle sent by props', () => {

        const { getAllByText } = render(
            <FirstApp
                title={ title }
                subTitle={ subTitle }
                />                
            );
            expect( getAllByText(subTitle) ).toBeTruthy(); // cuando hay mas de un elemento subTitle
            expect( getAllByText(subTitle).length ).toBe(4); // cuando compruebas que hayan 4  subTitles
        });
    
});

