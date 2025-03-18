import { collection, doc, getDoc, getDocs, limit, orderBy, query, startAfter } from "firebase/firestore";
import { DataBaseError, DataBaseSystemFailure } from "../../../UI/ALERTS/ERRORS/Domain/errors";
import { db } from "../../../UI/FIREBASE/database";
import { LostProyect_I } from "../Domain/lost-proyect";

export const MAX_LENGTH_GET_LOSTS_PROYECTS = 5;

export const getLostsProjects = async (keyName: string | null): Promise<LostProyect_I[]> => {
    if (typeof keyName !== 'string' && keyName !== null) throw new TypeError('The received arguments are invalid.')

    try {
        if (!db) throw new DataBaseError('The database is not initialized.');

        const proyectsRef = collection(db, 'LOSTS_PROYECTS');
        let q;

        if (keyName === null) q = query(
            proyectsRef,
            orderBy('keyName', "asc"),
            limit(MAX_LENGTH_GET_LOSTS_PROYECTS)
        )
        if (typeof keyName === 'string') {
            const lastProyectRef = doc(db, 'LOSTS_PROYECTS', keyName)
            const lastProyectSnap = await getDoc(lastProyectRef);

            if (!lastProyectSnap.exists()) return [];

            q = query(
                proyectsRef,
                orderBy('keyName', "asc"),
                startAfter(lastProyectSnap),
                limit(MAX_LENGTH_GET_LOSTS_PROYECTS)
            );
        }
        if (!q) return [];

        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            key_name: doc.id, ...doc.data()
        })) as LostProyect_I[];


    } catch (error) {
        if (error instanceof DataBaseError) throw error;
        throw new DataBaseSystemFailure(`Firestore query failed: ${error}`);
    }
}