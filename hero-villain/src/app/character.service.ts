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

    constructor()
    {
    }

    public addCharacter( c: Character )
    {
        this.characters.push( c );
    }


    getCharacters(): Observable<Character[]>
    {
        return of( this.characters );
    }

}
