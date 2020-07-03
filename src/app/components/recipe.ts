export interface Recipe  {
    id: number,
    name: string,
    prep: string,
    cook: string,
    total: string,
    additional: string,
    servings: string,
    imageURL: string,
    videoURL: string,
    ingredients: string[],
    details: string,
}