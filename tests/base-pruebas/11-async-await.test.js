/* eslint-disable no-undef */
import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Test in file named 11-async-await.js', () => {

    test('Should getImage() return an url image', async() => {
        const url = await getImagen();
     
        expect(typeof url).toBe('string');
        
    });
    
});