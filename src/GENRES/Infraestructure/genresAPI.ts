import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { Gender_I } from "../Domain/gender";
import { db } from "../../UI/FIREBASE/database";

export const MAX_LENGTH_GENRES = 2;

export const getGenres = async (lastID: string | null): Promise<Gender_I[]> => {
    const tagsRef = collection(db, "GENRES");

    let q;
    if (lastID === null) {
        q = query(tagsRef, orderBy("id"), limit(MAX_LENGTH_GENRES));
    } else {
        q = query(tagsRef);  // Si en el futuro hay otra lógica aquí
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Gender_I[];
};
