import { beforeEach, describe, expect, test, vi } from 'vitest';
import { getGenres } from '../genresAPI';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

// Mock de las funciones de Firestore
vi.mock("firebase/firestore", () => ({
    getFirestore: vi.fn(() => "mockFirestore"),
    collection: vi.fn(),
    getDocs: vi.fn(),
    query: vi.fn(),
    orderBy: vi.fn(),
    limit: vi.fn(),
}));

// Determinar Mocks
const collectionMock = vi.mocked(collection);
const getDocsMock = vi.mocked(getDocs);
const queryMock = vi.mocked(query);
const orderByMock = vi.mocked(orderBy);
const limitMock = vi.mocked(limit);

describe('getGenres', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test('Si el ID es NULL retornar los primeros 2 elementos.', async () => {
        // Datos simulados
        const LocalDB = [
            { id: '0hVCtp49R3UVBLSLcXRu', data: { name: 'suspenso' } },
            { id: '2Ep9rmrjYDKqW2ycKW3c', data: { name: 'entretenimiento' } }
        ];

        // Mockeamos cada función de Firestore
        collectionMock.mockReturnValue("mockCollection" as any);
        orderByMock.mockReturnValue("mockOrderBy" as any);
        limitMock.mockReturnValue("mockLimit" as any);
        queryMock.mockReturnValue("mockQuery" as any);
        getDocsMock.mockResolvedValue({ docs: LocalDB.map(doc => ({ id: doc.id, data: () => doc.data })) } as any);

        // Llamamos a la función con lastID === null
        const result = await getGenres(null);

        // Verificamos llamadas a Firestore
        expect(query).toHaveBeenCalledWith("mockCollection", "mockOrderBy", "mockLimit");

        // Verificamos el resultado esperado
        expect(result).toEqual([
            { id: '0hVCtp49R3UVBLSLcXRu', name: 'suspenso' },
            { id: '2Ep9rmrjYDKqW2ycKW3c', name: 'entretenimiento' }
        ]);
    });
});
