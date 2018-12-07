export class Character
{
    public name: string;
    public level: number;
    public desc: string;
    public type: string;
    public id: number;

    constructor( id: number, name: string, level: number, desc: string, type: string )
    {
        this.name = name;
        this.level = level;
        this.desc = desc;
        this.type = type;
        this.id = id;
    }
}