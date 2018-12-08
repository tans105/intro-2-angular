import {Injectable} from '@angular/core';
import {Character} from "./character.model";
import {Observable} from "rxjs/internal/Observable";
import {of} from "rxjs/internal/observable/of";

@Injectable( {
    providedIn: 'root'
} )
export class CharacterService
{

    characters: Character[] = [];
    power: string;

    constructor()
    {
    }

    public addCharacter( c: Character )
    {
        this.characters.push( c );
        this.computePower( this.characters );
        console.log( "Power Lies with " + this.power );
    }


    getCharacters(): Observable<Character[]>
    {
        return of( this.characters );
    }

    getPowerVal(): Observable<string>
    {
        return of( this.power );
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
        console.log( "Here" );
        this.power = (powerVal > 0 && powerVal != 0) ? 'Heroes :)' : 'Villain :(';
    }
}
