import { expect, test } from 'vitest';
import { validateKeySearch } from '../proyects-preview-app';

// :) 
test('Si la key es éxitosa no debe retonar ninguna alerta.', () => {
    const result = validateKeySearch('¡Válido!');
    expect(result).toBe(null);
})

// >:( 

test('Si no es STRING debe retornar una alerta', () => {
    const result1 = validateKeySearch(true);
    const result2 = validateKeySearch(undefined);
    const result3 = validateKeySearch([]);

    const alert = `Introduce una palabra válida.`;

    expect(result1).toBe(alert);
    expect(result2).toBe(alert);
    expect(result3).toBe(alert);
})

test('Si la key está vacía debe retornar una alerta', () => {
    const result = validateKeySearch('');

    const alert = `No se permiten palabras vacías.`;
    expect(result).toBe(alert);
})





