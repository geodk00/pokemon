import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

/*
    A grid that displays an array of pokemon
*/

@Component({
    selector: 'app-pokemon-grid',
    templateUrl: './pokemon-grid.component.html',
    styleUrls: ['./pokemon-grid.component.css']
})

export class PokemonGridComponent {
    @Input() pokemon: Pokemon[] = [];
}
