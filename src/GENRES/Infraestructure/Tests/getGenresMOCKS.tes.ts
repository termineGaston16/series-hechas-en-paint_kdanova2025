// import { beforeEach, describe, expect, test, vi } from 'vitest';
// import { getGenres, MAX_LENGTH_GENRES } from '../genresAPI';
// import { collection, getDocs, query, orderBy, limit, doc, getDoc, startAfter } from 'firebase/firestore';

// // Mock de las funciones de Firestore
// vi.mock("firebase/firestore", () => ({
//     getFirestore: vi.fn(() => "mockFirestore"),
//     collection: vi.fn(),
//     getDocs: vi.fn(),
//     query: vi.fn(),
//     orderBy: vi.fn(),
//     limit: vi.fn(),
//     doc: vi.fn(),
//     getDoc: vi.fn(),
//     startAfter: vi.fn(),
// }));

// // Determinar Mocks
// const collectionMock = vi.mocked(collection);
// const getDocsMock = vi.mocked(getDocs);
// const queryMock = vi.mocked(query);
// const orderByMock = vi.mocked(orderBy);
// const limitMock = vi.mocked(limit);
// const docMock = vi.mocked(doc);
// const getDocMock = vi.mocked(getDoc);
// const startAfterMock = vi.mocked(startAfter);


// describe('getGenres', () => {
//     beforeEach(() => {
//         vi.clearAllMocks();
//     });

//     // test('Si el ID es NULL retornar apartir del primer elemento.', async () => {
//     //     // Datos simulados
//     //     const LocalDB = [
//     //         { id: '0hVCtp49R3UVBLSLcXRu', data: () => ({ name: 'suspenso' }) },
//     //         { id: '2Ep9rmrjYDKqW2ycKW3c', data: () => ({ name: 'entretenimiento' }) }
//     //     ];

//     //     // Mockeamos cada función de Firestore
//     //     collectionMock.mockReturnValue("mockCollection" as any);
//     //     orderByMock.mockReturnValue("mockOrderBy" as any);
//     //     limitMock.mockReturnValue("mockLimit" as any);
//     //     queryMock.mockReturnValue("mockQuery" as any);

//     //     // Simulación de getDocs que devuelve solo el primer documento si hay limit(1)
//     //     getDocsMock.mockResolvedValue({
//     //         docs: LocalDB.slice(0, MAX_LENGTH_GENRES), // Filtrar solo el primer documento
//     //     } as any);

//     //     const result = await getGenres(null);

//     //     // Verificamos que las funciones se llamaron con los parámetros correctos
//     //     expect(collection).toHaveBeenCalledWith(expect.anything(), 'GENRES');
//     //     expect(orderBy).toHaveBeenCalledWith("id", 'asc');
//     //     expect(limit).toHaveBeenCalledWith(MAX_LENGTH_GENRES);
//     //     expect(query).toHaveBeenCalledWith("mockCollection", "mockOrderBy", "mockLimit");

//     //     // Verificamos el resultado esperado
//     //     expect(result).toEqual([
//     //         { id: '0hVCtp49R3UVBLSLcXRu', name: 'suspenso' }
//     //     ]);
//     // });

//     test('Si el ID contiene un valor, continuar después de ese elemento asociado al ID.', async () => {
//         const LocalDB = [
//             { id: '0hVCtp49R3UVBLSLcXRu', data: () => ({ name: 'suspenso' }) },
//             { id: '2Ep9rmrjYDKqW2ycKW3c', data: () => ({ name: 'entretenimiento' }) }
//         ];
//         const lastID = '0hVCtp49R3UVBLSLcXRu';

//         collectionMock.mockReturnValue('collectionMock' as any);
//         queryMock.mockReturnValue('queryMock' as any);
//         orderByMock.mockReturnValue('orderByMock' as any);
//         limitMock.mockReturnValue('limitMock' as any);
//         docMock.mockReturnValue('docMock' as any);
//         startAfterMock.mockReturnValue('startAfterMock' as any);
//         getDocMock.mockResolvedValue({ exists: true } as any);
//         getDocsMock.mockResolvedValue({
//             docs: LocalDB.splice(
//                 LocalDB.findIndex(gender => gender.id === lastID) + 1,
//                 MAX_LENGTH_GENRES + 1
//             )
//         } as any);

//         const result = await getGenres(lastID);
//         expect(result).toEqual([
//             { id: '2Ep9rmrjYDKqW2ycKW3c', name: 'entretenimiento' }
//         ]);
//     });

// });


