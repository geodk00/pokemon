import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

/*
 Component that display a list of pokemon moves
*/

@Component({
    selector: 'app-pokemon-moves',
    templateUrl: './pokemon-moves.component.html',
    styleUrls: ['./pokemon-moves.component.css']
})

export class PokemonMovesComponent {
    @Input() pokemon: Pokemon;
}
