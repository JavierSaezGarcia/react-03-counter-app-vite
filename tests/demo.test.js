/* eslint-disable no-undef */

describe('Pruebas en el archivo demo.test.js', () => {

   test('Esta prueba no debe de fallar', () => {
      // 1.- Inicializacion
      const message1 = 'Hola Mundo';

      // 2.- Estímulo
      const message2 = message1.trim();

      // 3.- Assserts, Observar el comportamiento
      expect(message1).toBe(message2);
   });

});