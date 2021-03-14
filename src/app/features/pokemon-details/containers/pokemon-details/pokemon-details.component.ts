import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LocalStorageService } from "src/app/features/login/services/local-storage/local-storage.service";
import { Pokemon } from "src/app/models/pokemon.model";
import { environment } from "src/environments/environment";
import { PokemonDetailsService } from "../../services/pokemon-details.service";

const { imageURL } = environment

@Component({
    selector: 'app-pokemon-details',
    templateUrl: './pokemon-details.component.html'
})

export class PokemonDetailsContainer implements OnInit{

    private readonly pokemonName: string = '';

    constructor(
        private readonly route: ActivatedRoute, 
        private readonly pokemonDetailsService: PokemonDetailsService,
        private readonly localStorageService: LocalStorageService) {
        this.pokemonName = this.route.snapshot.paramMap.get('name');
    }

    ngOnInit(): void {
        this.pokemonDetailsService.fetchPokemonByName(this.pokemonName);
    }

    get pokemon(): Pokemon {
        return this.pokemonDetailsService.pokemon;
    }

    handleCollect() {
        console.log('collecting pokemon')
        const collectedPokemon :Pokemon= {
            name: this.pokemonDetailsService.pokemon.name,
            url: `${imageURL}/${ this.pokemonDetailsService.pokemon.id }.png`,
            id: this.pokemonDetailsService.pokemon.id
        }
        this.localStorageService.addPokemon(collectedPokemon)
    }
}