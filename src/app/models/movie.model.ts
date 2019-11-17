export default class Movie {
    constructor(
    public id: number,
    public title: string,
    public poster_path: string,
    public overwiew: string,
    public release_date: string,
    public vote_average: number
    ) {}
}