export class Worker{
    public id:number;
    public name: string;
    public position: string;
    public nationality : string;
    public relagion : string;

    constructor(id:number, name: string, position: string, nationality: string ,relagion: string){
        this.id = id;
        this.name = name;
        this.position = position;
        this.nationality = nationality;
        this.relagion = relagion;
    };
}