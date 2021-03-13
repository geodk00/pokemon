import { Component, Input } from "@angular/core";
import { Pokemon } from "src/app/models/pokemon.model";

@Component({
    selector: 'app-pokemon-grid',
    templateUrl: './pokemon-grid.component.html',
    styleUrls: ['./pokemon-grid.component.css']
})

export class PokemonGridComponent {
    @Input() pokemon: Pokemon[] = []
}