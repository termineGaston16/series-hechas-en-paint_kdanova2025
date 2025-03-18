import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { Gender_I } from "../Domain/gender";
import { db } from "../../UI/FIREBASE/database";

export const MAX_LENGTH_GENRES = 1;

export const getGenres = async (lastID: string | null): Promise<Gender_I[]> => {

};

