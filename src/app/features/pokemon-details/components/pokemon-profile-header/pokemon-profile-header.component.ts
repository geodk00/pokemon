import { Component, Input } from "@angular/core";
import { Pokemon } from "src/app/models/pokemon.model";

@Component({
    selector: 'app-pokemon-profile-header',
    templateUrl: './pokemon-profile-header.component.html'
})

export class PokemonProfileHeaderComponent {
    @Input() pokemon: Pokemon;
}