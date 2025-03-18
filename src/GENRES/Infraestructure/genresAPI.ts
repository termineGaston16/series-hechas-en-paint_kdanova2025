export const getGenres = async (id: string | null) => {
    if (typeof id !== 'string' && id !== null) throw TypeError(`The expected parameter is not of a valid type`)

}