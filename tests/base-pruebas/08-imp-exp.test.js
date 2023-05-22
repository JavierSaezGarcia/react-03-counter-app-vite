/* eslint-disable no-undef */
import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en el archivo 08-imp-exp.js', () => {

    test('getHeroeById debe de retornar un heroe por id', () => {
        
        const id = 1;
        const heroe = getHeroeById( id );        
        expect( heroe ).toEqual( heroes[0] );
        expect( heroe ).toBeTruthy();
        
        
    });
    test('getHeroeById debe de retornar un heroe que no exista', () => {
        
        const id = 1000;
        const heroe = getHeroeById( id );        
        expect( heroe ).toBeFalsy();        
        
    });

    // TODO:
    // Debe retornar un arreglo de heroes
    // evaluar que el arreglo tenga 3 elementos 
    // toEqual al arreglo filtrado por owner=Marvel
    // marvel length === 2

    test('getHeroesByOwner debe de retornar un arreglo de heroes por owner "DC"', () => {
        
        const heroesDC = getHeroesByOwner('DC');        

        expect( heroesDC ).toEqual( heroes.filter( hero => hero.owner === 'DC' ) );
        expect( heroesDC.length ).toEqual( 3 );
       
    });

    test('getHeroesByOwner debe de retornar un arreglo de heroes por owner "Marvel"', () => {        
        
        const heroesMarvel = getHeroesByOwner('Marvel');        
        expect( heroesMarvel ).toEqual( heroes.filter( hero => hero.owner === 'Marvel' ) );
        expect( heroesMarvel.length ).toEqual( 2 );

    });


});




