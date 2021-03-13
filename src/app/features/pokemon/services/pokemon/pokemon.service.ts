import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, shareReplay } from 'rxjs/operators'
import { PokemonResponse } from "src/app/models/pokemon-response.model";
import { Pokemon } from "src/app/models/pokemon.model";
import { environment } from "src/environments/environment";
import { PaginationUtility } from "src/app/utils/pagination.util"
const { pokeAPI } = environment;
const { imageURL } = environment;

@Injectable({
    providedIn: 'root'
})

export class PokemonService {

    private readonly pokemonCache$;
    private _pokemon: Pokemon[] = []
    public error: string = "";

    public paginator: PaginationUtility;


    constructor(private readonly http: HttpClient) {
        this.pokemonCache$ = 
            this.http.get<PokemonResponse>(`${pokeAPI}/pokemon?limit=100`)
            .pipe(shareReplay(1));
    }

    get pokemon(): Pokemon[] {
        if (this.paginator)
            return this._pokemon.slice(this.paginator.getPagination().offsetStart, this.paginator.getPagination().offsetEnd);
        else
            return []
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
                    this._pokemon = pokemon;
                    this.paginator = new PaginationUtility(pokemon.length)
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
            image: `${ imageURL }/${ id }.png`
        }
    }
}