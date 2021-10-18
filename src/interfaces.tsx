export interface flickrUrl {
    method?: string;
    api_key?: string;
    text?: string;
    sort?: string;
    per_page?: string;
    license?: string;
    extras?: string;
    format?: string;
    nojsoncallback?: string;
    id?: string;
    farm?: string;
    server?: string;
    secret?: string;
    url_m?: string;
}

export interface flickrData {
    farm: number;
    height_m: number;
    id: string;
    isfamily: number;
    isfriend: number;
    ispublic: number;
    owner: string;
    secret: string;
    server: string;
    title: string;
    url_m: string;
    width_m: number;
}
