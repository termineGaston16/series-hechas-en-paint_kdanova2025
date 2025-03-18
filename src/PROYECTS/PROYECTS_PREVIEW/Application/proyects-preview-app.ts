export const validateKeySearch = (keySearch: string) => {
    if (typeof keySearch !== 'string') return `Introduce una palabra válida.`;
    if (keySearch.length <= 0) return `No se permiten palabras vacías.`;

    return null;
}