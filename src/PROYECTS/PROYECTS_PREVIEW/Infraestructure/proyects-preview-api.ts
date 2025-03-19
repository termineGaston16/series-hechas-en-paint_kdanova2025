import { collection, doc, getDoc, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore";
import { db } from "../../../UI/FIREBASE/database"
import { DataBaseError, DataBaseSystemFailure } from "../../../UI/ALERTS/ERRORS/Domain/errors";
import { ProyectPreview_I } from "../Domain/proyect_preview";

export const MAX_LENGTH_PROJECTS_PREVIEW_BY_GENDER = 5;
export const MAX_LENGTH_GET_PROYECTS_PREVIEW_KEYSEARCH = 5;

export const getProjectsPreviewByGender = async (
    keyName: string | null,
    gender: string
): Promise<ProyectPreview_I[]> => {

    if (typeof keyName !== 'string'
        && keyName !== null
        && typeof gender !== 'string'
        || gender.length <= 0
    ) throw new TypeError('The received arguments are invalid.')

    try {
        if (!db) throw new DataBaseError('The database is not initialized.');

        const proyectsRef = collection(db, 'PROYECTS');
        let q;

        if (keyName === null) q = query(
            proyectsRef,
            where('genres', 'array-contains', gender),
            orderBy('keyName', "asc"),
            limit(MAX_LENGTH_PROJECTS_PREVIEW_BY_GENDER)
        )
        if (typeof keyName === 'string') {
            const lastProyectRef = doc(db, 'PROYECTS', keyName)
            const lastProyectSnap = await getDoc(lastProyectRef);

            if (!lastProyectSnap.exists()) return [];

            q = query(
                proyectsRef,
                where('genres', 'array-contains', gender),
                orderBy('keyName', "asc"),
                startAfter(lastProyectSnap),
                limit(MAX_LENGTH_PROJECTS_PREVIEW_BY_GENDER)
            );
        }
        if (!q) return [];

        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            key_name: doc.id, ...doc.data()
        })) as ProyectPreview_I[];


    } catch (error) {
        if (error instanceof DataBaseError) throw error;
        throw new DataBaseSystemFailure(`Firestore query failed: ${error}`);
    }
}

export const getProjectsPreviewByKeySearch = async (
    keyName: string | null,
    keySearch: string
): Promise<ProyectPreview_I[]> => {
    if (typeof keyName !== 'string'
        && keyName !== null
        && typeof keySearch !== 'string'
        || keySearch.length <= 0
    ) throw new TypeError('The received arguments are invalid.')

    try {
        if (!db) throw new DataBaseError('The database is not initialized.');

        const proyectsRef = collection(db, 'PROYECTS');
        let q;

        if (keyName === null) q = query(
            proyectsRef,
            where("titleInLowercase  ", ">=", keySearch.toLocaleLowerCase()),
            where("titleInLowercase  ", "<=", keySearch.toLocaleLowerCase() + '\uf8ff'),
            orderBy('keyName', "asc"),
            limit(MAX_LENGTH_GET_PROYECTS_PREVIEW_KEYSEARCH)
        )
        if (typeof keyName === 'string') {
            const lastProyectRef = doc(db, 'PROYECTS', keyName)
            const lastProyectSnap = await getDoc(lastProyectRef);

            if (!lastProyectSnap.exists()) return [];

            q = query(
                proyectsRef,
                where("titleInLowercase  ", ">=", keySearch.toLocaleLowerCase()),
                where("titleInLowercase  ", "<=", keySearch.toLocaleLowerCase() + '\uf8ff'),
                orderBy('keyName', "asc"),
                startAfter(lastProyectSnap),
                limit(MAX_LENGTH_GET_PROYECTS_PREVIEW_KEYSEARCH)
            );
        }
        if (!q) return [];

        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            key_name: doc.id, ...doc.data()
        })) as ProyectPreview_I[];

    } catch (error) {
        if (error instanceof DataBaseError) throw error;
        throw new DataBaseSystemFailure(`Firestore query failed: ${error}`);
    }

}