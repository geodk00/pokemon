import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

/*
    Component that display "profile" information about a pokemon

    This could have been split up even further into even more components,
    but I didn't want to clutter the project even more.
*/

@Component({
    selector: 'app-pokemon-profile',
    templateUrl: './pokemon-profile.component.html',
    styleUrls: ['./pokemon-profile.component.css']
})

export class PokemonProfileComponent {
    @Input() pokemon: Pokemon;

}
