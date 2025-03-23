import { expect, it } from 'vitest';
import { validateKeySearch } from '../proyects-preview-app';

// :) 
it('Si la key es éxitosa no debe retonar ninguna alerta.', () => {
    const result = validateKeySearch('¡Válido!');
    expect(result).toBe(null);
})

// >:( 
it('Si no es STRING debe retornar una alerta', () => {
    const result1 = validateKeySearch(true as unknown as string);
    const result2 = validateKeySearch(undefined as unknown as string);
    const result3 = validateKeySearch([] as unknown as string);

    const alert = `Introduce una palabra válida.`;

    expect(result1).toBe(alert);
    expect(result2).toBe(alert);
    expect(result3).toBe(alert);
})

it('Si la key está vacía debe retornar una alerta', () => {
    const result = validateKeySearch('');

    const alert = `No se permiten palabras vacías.`;
    expect(result).toBe(alert);
})





