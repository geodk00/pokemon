import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from '../../services/pokemon/pokemon.service';

/*
    Container that shows a "catalogue" of pokemon
*/

@Component({
    selector: 'app-pokemon-container',
    templateUrl: './pokemon.component.html'
})

export class PokemonComponent implements OnInit {

    constructor(private readonly pokemonService: PokemonService) {

    }

    ngOnInit(): void {
        this.pokemonService.fetchPokemon();
    }

    get pokemon(): Pokemon[] {
        return this.pokemonService.pokemons;
    }
}
