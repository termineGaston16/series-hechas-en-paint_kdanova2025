import { beforeEach, describe, expect, test, vi } from 'vitest'
import { getGenres } from '../genresAPI';

// describe('getGenres', () => {
//     beforeEach(() => {
//         vi.clearAllMocks();
//     })
// })

test('Si el ID no es de tipo STRING o NULL lanza un TypeError', async () => {
    await expect(getGenres(1)).rejects.toThrow(TypeError);
})


// test('Si el ID es null se obtiene los Géneros apartir del primer elemento', async () => {
//     const localDB = [
//         {
//             id: '0hVCtp49R3UVBLSLcXRu', data: () => ({
//                 id: '0hVCtp49R3UVBLSLcXRu',
//                 name: 'suspenso'
//             })
//         },
//         {
//             id: '0hVCtp49R3UVBLSLcXRu', data: () => ({
//                 id: '0hVCtp49R3UVBLSLcXRu',
//                 name: 'suspenso'
//             })
//         },
//         {
//             id: '0hVCtp49R3UVBLSLcXRu', data: () => ({
//                 id: '0hVCtp49R3UVBLSLcXRu',
//                 name: 'suspenso'
//             })
//         }
//     ]
// });
