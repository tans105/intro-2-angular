import {Component, OnInit} from '@angular/core';
import {Character} from "../character.model";
import {CharacterService} from "../character.service";

@Component( {
    selector: 'app-character-edit',
    templateUrl: './character-edit.component.html',
    styleUrls: ['./character-edit.component.css']
} )
export class CharacterEditComponent implements OnInit
{

    id: number = 1;
    char: Character;
    name: string;
    level: number = 2;
    desc: string;
    type: string = "H";

    constructor(private charService: CharacterService)
    {
    }

    ngOnInit()
    {
    }

    changeLevel( level: number )
    {
        this.level = level;
    }

    addCharacter()
    {
        // console.log( this.id, this.name, this.type, this.level, this.desc );
        this.char = new Character( this.id, this.name, this.level, this.desc, this.type);
        this.charService.addCharacter(this.char);
        this.id++;
    }
}
