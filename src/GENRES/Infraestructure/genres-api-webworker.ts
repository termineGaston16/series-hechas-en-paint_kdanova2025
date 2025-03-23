import { collection, doc, getDoc, getDocs, limit, orderBy, query, startAfter } from "firebase/firestore";
import { Gender_I } from "../Domain/gender";
import { db } from "../../UI/FIREBASE/database";
import { DataBaseError, DataBaseSystemFailure, WebWorkerError } from "../../UI/ALERTS/ERRORS/Domain/errors";



self.onmessage = async (event) => {
    const { action, lastID } = event.data;

    try {
        let data;

        switch (action) {
            case "getGenres":
                data = await getGenres(lastID);
                break;
            default:
                throw new WebWorkerError('Unknown WebWorker Action');
        }

        self.postMessage({ status: "success", action, data });

    } catch (error) {
        self.postMessage({
            status: "error",
            action,
            message: (error as Error).message
        });
    }

};


export const MAX_LENGTH_GENRES = 5;

export const getGenres = async (lastID: string | null): Promise<Gender_I[]> => {
    if (typeof lastID !== 'string' && lastID !== null) throw new TypeError('The received arguments are invalid.')

    try {
        if (!db) throw new DataBaseError('The database is not initialized.')

        const genresRef = collection(db, 'GENRES');
        let q;

        if (lastID === null) q = query(genresRef, orderBy('id', "asc"), limit(MAX_LENGTH_GENRES));
        if (typeof lastID === 'string') {
            const lastGenderRef = doc(db, 'GENRES', lastID);
            const lastGenderSnap = await getDoc(lastGenderRef);

            if (!lastGenderSnap.exists()) return [];
            q = query(genresRef, orderBy('id', "asc"), startAfter(lastGenderSnap), limit(MAX_LENGTH_GENRES));
        }
        if (!q) return [];

        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            id: doc.id, ...doc.data()
        })) as Gender_I[];

    } catch (error) {
        if (error instanceof DataBaseError) throw error;
        throw new DataBaseSystemFailure(`Firestore query failed: ${error}`);
    }
};

