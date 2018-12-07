import {Component, OnInit} from '@angular/core';
import {Character} from "../character.model";
import {CharacterService} from "../character.service";
import {forEach} from "@angular/router/src/utils/collection";

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
        this.getCharacters();
    }

    getCharacters(): void
    {
        this.cs.getCharacters()
            .subscribe( characters => {
                this.characters = characters;
            } );

    }

    computePower( characters: Character[] )
    {
        let powerVal = 0;
        characters.forEach( function ( entry ) {
            if( entry.type === 'H' )
            {
                powerVal += entry.level;
            }
            else
            {
                powerVal -= entry.level;
            }
        } );
        this.power = (powerVal > 0 && powerVal !=0) ? 'Heroes :)' : 'Villain :(';
    }


}
