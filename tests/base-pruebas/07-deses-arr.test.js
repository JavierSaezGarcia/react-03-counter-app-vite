/* eslint-disable no-undef */
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {
    test('retornaArreglo debe de retornar un arreglo', () => {
        
        const [letters, numbers] = retornaArreglo();
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);
        expect(typeof letters).toEqual(expect.any(String)); // comprobamos que es un string;
        expect(typeof numbers).toBe('number');
        expect(Array.isArray([letters, numbers])).toBe(true); // comprobamos que es un array
        
    });
});



