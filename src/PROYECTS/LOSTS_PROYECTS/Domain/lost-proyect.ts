import { Proyect_I } from "../../Domain/proyect";

export interface LostProyect_I {
    key_name: Proyect_I['key_name'],
    official_title: Proyect_I['official_title'],
    titleInLowercase: Proyect_I['titleInLowercase'],
    producer: Proyect_I['producer'],
    estimated_year: string,
    front_page: Proyect_I['cover_main'],
    description: Proyect_I['description']
};
