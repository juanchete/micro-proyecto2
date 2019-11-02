export interface Movies {

    id?: string;

    title?: string;
    year?: string;
    rated?: string;
    released?: string;
    runtime?: string;
    genre?: [string];
    director?: string;
    writer?: string;
    actors?: string;
    plot?: string;
    language?: string;
    country?: string;
    awards?: string;
    poster?: string;
    available?: boolean;
    comingSoon: boolean;
    images?: [string];
}
