export interface Proyect_I {
    key_name: string,
    official_title: string,
    titleInLowercase: string,
    producer: {
        name: string,
        url: string | null
    },
    release_date: string,
    cover_main: string,
    description: string,
    genres: string[],
    category: string,
    light_cover: string,
    main_logo: string,
    access_link: string,
    gallery_id: string
};
