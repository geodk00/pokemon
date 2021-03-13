import { Component, OnInit } from "@angular/core";
import { Pokemon } from "src/app/models/pokemon.model";
import { PokemonService } from "../../services/pokemon/pokemon.service";

@Component({
    selector: 'app-pokemon-container',
    templateUrl: './pokemon.component.html'
})

export class PokemonContainer implements OnInit {

    constructor(private readonly pokemonService: PokemonService) {

    }

    ngOnInit(): void {
        this.pokemonService.fetchPokemon();     
    }

    get pokemon(): Pokemon[] {
        return this.pokemonService.pokemon
    }
}