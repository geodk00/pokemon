import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { LocalStorageService } from "src/app/features/login/services/local-storage/local-storage.service";
import { Pokemon } from "src/app/models/pokemon.model";
import { environment } from "src/environments/environment";
import { PokemonDetailsService } from "../../services/pokemon-details.service";

const { imageURL, pokeAPI } = environment

@Component({
    selector: 'app-pokemon-details',
    templateUrl: './pokemon-details.component.html'
})

export class PokemonDetailsContainer implements OnInit, OnDestroy{

    private readonly pokemonName: string = '';
    private pokemonSubscription :Subscription;
    private pokemons$;

    constructor(
        private readonly route: ActivatedRoute, 
        private readonly pokemonDetailsService: PokemonDetailsService,
        private readonly localStorageService: LocalStorageService) {
        this.pokemonName = this.route.snapshot.paramMap.get('name');
    }

    ngOnInit(): void {
        this.pokemonDetailsService.fetchPokemonByName(this.pokemonName);
        this.pokemonSubscription = this.localStorageService.getPokemonObservable().subscribe(pokemons => this.pokemons$ = pokemons)
    }

    ngOnDestroy(): void {
        this.pokemonSubscription.unsubscribe()
    }

    get pokemon(): Pokemon {
        return this.pokemonDetailsService.pokemon;
    }

    get collectedPokemon() :boolean {
        return this.pokemon && this.pokemons$.filter(pokemon => pokemon.id === this.pokemon.id).length > 0
    }

    handleCollect() {
        const collectedPokemon :Pokemon= {
            name: this.pokemonDetailsService.pokemon.name,
            image: `${imageURL}/${ this.pokemonDetailsService.pokemon.id }.png`,
            id: this.pokemonDetailsService.pokemon.id,
            url: `${pokeAPI}/${ this.pokemonDetailsService.pokemon.id }/`
        }
        this.localStorageService.addPokemon(collectedPokemon)
    }

    handleRemove() {
        this.localStorageService.removePokemon(this.pokemon.id)
    }
}