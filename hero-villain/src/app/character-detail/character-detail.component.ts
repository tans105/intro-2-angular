import {Component, OnInit} from '@angular/core';
import {Character} from "../character.model";
import {CharacterService} from "../character.service";

@Component( {
    selector: 'app-character-detail',
    templateUrl: './character-detail.component.html',
    styleUrls: ['./character-detail.component.css']
} )
export class CharacterDetailComponent implements OnInit
{
    characters: Character[] = [];
    power: string;

    constructor( private cs: CharacterService )
    {
    }

    ngOnInit()
    {
        this.getPowerVal();
        this.getCharacters();
    }

    getCharacters(): void
    {
        this.cs.getCharacters()
            .subscribe( characters => {
                this.characters = characters;
            } );

    }

    getPowerVal(): void
    {
        this.cs.getPowerVal()
            .subscribe( power => {
                this.power = power;
            } );
    }
}
