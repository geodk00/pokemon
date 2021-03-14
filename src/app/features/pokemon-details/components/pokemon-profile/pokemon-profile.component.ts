import { Component, Input } from "@angular/core";
import { Pokemon } from "src/app/models/pokemon.model";

@Component({
    selector: 'app-pokemon-profile',
    templateUrl:  './pokemon-profile.component.html'
})

export class PokemonProfileComponent {
    @Input() pokemon: Pokemon;

};