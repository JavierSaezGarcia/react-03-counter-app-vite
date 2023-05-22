/* eslint-disable no-undef */

import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Pruebas en el archivo 02-template-string.js', () => {

    test('getSaludo debe de retornar "Hola Javier"', () => {
        const nombre = 'Javier'
       
        const message = getSaludo(nombre)
        expect(message).toBe(`Hola ${nombre}`);
        
    })
       
})