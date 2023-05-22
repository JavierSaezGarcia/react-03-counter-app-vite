/* eslint-disable no-undef */
import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Test in 09-Promesas', () => {

    test('should getHeroeByIdAsync return a hero', (done) => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {

                expect(heroe).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                done();

            });           
          
    });

    test('should getHeroeByIdAsync return an error si el heroe no existe', (done) => {

        const id = 100;
        getHeroeByIdAsync(id)
            .then(heroe => {

                expect(heroe).toBeFalsy();

                done();

            })    
            .catch(error => {

                console.log(error);
               
                done();    
            });   
                
          
    });
    
});