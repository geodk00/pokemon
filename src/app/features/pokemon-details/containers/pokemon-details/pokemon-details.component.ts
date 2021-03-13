import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Pokemon } from "src/app/models/pokemon.model";
import { PokemonDetailsService } from "../../services/pokemon-details.service";

@Component({
    selector: 'app-pokemon-details',
    templateUrl: './pokemon-details.component.html'
})

export class PokemonDetailsContainer implements OnInit{

    private readonly pokemonName: string = '';

    constructor(
        private readonly route: ActivatedRoute, 
        private readonly pokemonDetailsService: PokemonDetailsService) {
        this.pokemonName = this.route.snapshot.paramMap.get('name');
    }

    ngOnInit(): void {
        this.pokemonDetailsService.fetchPokemonByName(this.pokemonName);
    }

    get pokemon(): Pokemon {
        return this.pokemonDetailsService.pokemon;
    }
}