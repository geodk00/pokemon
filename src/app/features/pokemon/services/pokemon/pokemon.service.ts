import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { PokemonResponse } from 'src/app/models/pokemon-response.model';
import { Pokemon } from 'src/app/models/pokemon.model';
import { environment } from 'src/environments/environment';
import { PaginationUtility } from 'src/app/utils/pagination.util';
import { Observable } from 'rxjs';

const { pokeAPI } = environment;
const { imageURL } = environment;

@Injectable({
    providedIn: 'root'
})

export class PokemonService {

    private readonly pokemonCache$: Observable<PokemonResponse>;
    private allPokemons: Pokemon[] = [];
    public error = '';

    public paginator: PaginationUtility;


    constructor(private readonly http: HttpClient) {
        // retain the result in the observable as a cache
        // only get the first 100 pokemon in this app
        this.pokemonCache$ =
            this.http.get<PokemonResponse>(`${pokeAPI}/pokemon?limit=100`)
                .pipe(shareReplay(1));
    }

    // Let the paginator decided which slice to return
    // the paginator is only available after a fetch, so return empty if we don't have it
    get pokemons(): Pokemon[] {
        if (this.paginator) {
            return this.allPokemons.slice(this.paginator.getPagination().offsetStart, this.paginator.getPagination().offsetEnd);
        }
        return [];
    }

    // "massage" the pokemon to add image url to them
    // and add them to the internal pokemon array and
    // create a new paginator (which needs the pokemon count)
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
                    this.allPokemons = pokemon;
                    this.paginator = new PaginationUtility(pokemon.length);
                },
                (error: HttpErrorResponse) => {
                    this.error = error.message;
                }
            );
    }

    private getIdAndImage(url: string): any {
        const id = url.split('/').filter(Boolean).pop();
        return {
            id: Number(id),
            image: `${imageURL}/${id}.png`
        };
    }
}
