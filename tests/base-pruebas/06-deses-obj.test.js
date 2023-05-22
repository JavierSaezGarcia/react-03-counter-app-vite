/* eslint-disable no-undef */

import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en el archivo usContext', () => {

    test('usContext debe de retornar un objeto', () => {

        const clave = 123456789;
        const edad = 28;
        const rango = 'Capitán';

        const testUser = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }
        const context = usContext({ clave, edad, rango });

        expect(context).toEqual(testUser);




    });

});



