import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { Gender_I } from "../Domain/gender";
import { db } from "../../UI/FIREBASE/database";

export const MAX_LENGTH_GENRES = 1;

export const getGenres = async (lastID: string | null): Promise<Gender_I[]> => {
    const genresRef = collection(db, "GENRES");
    let q;

    if (lastID === null) {
        q = query(genresRef, orderBy("id", 'asc'), limit(MAX_LENGTH_GENRES));
    } else {
        q = query(genresRef)
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Gender_I[];
};

