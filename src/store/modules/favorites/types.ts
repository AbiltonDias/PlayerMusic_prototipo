export interface IFavorite {
    id: number;
    title: string;
    description: string;
    duraction: string;
    public: string;
    link: string;
    picture: string;
    picture_small: string;
    checksum: string;
    tracklist: string;
}

export interface IFavoriteItem {
    music: object;
    quantity: number;
}

export interface IFavoriteState {
    items: IFavoriteItem[];
}