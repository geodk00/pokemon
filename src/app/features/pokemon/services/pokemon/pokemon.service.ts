import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, shareReplay } from 'rxjs/operators'
import { PokemonResponse } from "src/app/models/pokemon-response.model";
import { Pokemon } from "src/app/models/pokemon.model";
import { environment } from "src/environments/environment";

const { pokeAPI } = environment

@Injectable({
    providedIn: 'root'
})

export class PokemonService {

    private readonly pokemonCache$;
    pokemon: Pokemon[] = []
    error: string = "";

    constructor(private readonly http: HttpClient) {
        this.pokemonCache$ = 
            this.http.get<PokemonResponse>(`${pokeAPI}/pokemon`)
            .pipe(shareReplay(1));
                                
    }

    fetchPokemon(): void {
        this.pokemonCache$
            .pipe(
                map((response: PokemonResponse) => {
                    return response.results.map((pokemon: Pokemon) => ({
                        ...pokemon,
                        ...this.getIdAndImage(pokemon.url)
                    }));
                })
            )
            .subscribe(
                (pokemon: Pokemon[]) => {
                    this.pokemon = pokemon;
                },
                (error: HttpErrorResponse) => {
                    this.error = error.message;
                }
            );
    }

    private getIdAndImage(url: string): any {
        const id = url.split('/').filter( Boolean ).pop();
        return {
            id: Number(id),
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`
        }
    }
}