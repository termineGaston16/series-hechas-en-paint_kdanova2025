import { Proyect_I } from "../../Domain/proyect";

export interface ProyectPreview_I {
    key_name: Proyect_I['key_name'],
    official_title: Proyect_I['official_title'],
    titleInLowercase: Proyect_I['titleInLowercase'],
    genres: Proyect_I['genres'],
    light_cover: Proyect_I['light_cover'],
};
