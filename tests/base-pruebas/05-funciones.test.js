/* eslint-disable no-undef */

import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";



describe('Pruebas en 05-funciones', () => {
    
    test('getUser debe retornar un objeto', () => {

        const user = getUser();        
        expect(typeof user).toBe('object');
    });

    test('getUser debe retornar un objeto igual al que muestro', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        expect(user).toStrictEqual(testUser); // o expect(user).toEqual(testUser); 
       
    });
    test('getUsuarioActivo debe retornar un objeto', () => {

        const nombre = 'Javier';       
        expect(typeof getUsuarioActivo(nombre)).toBe('object');
    });
   

    test('getUsuarioActivo debe retornar un objeto igual al que muestro', () => {
        const nombre = 'Javier';
        const user = getUsuarioActivo(nombre);
        
        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        }); 
        
    });

});


