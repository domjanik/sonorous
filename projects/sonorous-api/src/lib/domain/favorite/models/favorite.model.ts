export class FavoriteField {
    name: string;
    value: string;
    type: number;
}

export class Favorite {
    categoryid: string;
    categoryName: string;
    fields: FavoriteField[]
}