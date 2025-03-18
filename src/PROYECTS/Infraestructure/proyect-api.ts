import { doc, getDoc } from "firebase/firestore";
import { DataBaseError, DataBaseSystemFailure } from "../../UI/ALERTS/ERRORS/Domain/errors";
import { db } from "../../UI/FIREBASE/database";
import { Proyect_I } from "../Domain/proyect";

export const getProjectByKeyName = async (keyName: string): Promise<Proyect_I | null> => {
    if (typeof keyName !== 'string' || keyName.length <= 0) throw new TypeError('The received arguments are invalid.')

    try {
        if (!db) throw new DataBaseError('The database is not initialized.');

        const proyectRef = doc(db, 'PROYECTS', keyName);
        const proyectSnap = await getDoc(proyectRef);

        if (!proyectSnap.exists()) return null;
        return {
            key_name: proyectSnap.id,
            ...proyectSnap.data()
        } as Proyect_I;

    } catch (error) {
        if (error instanceof DataBaseError) throw error;
        throw new DataBaseSystemFailure(`Firestore query failed: ${error}`);
    }
}