import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Pokemon } from "src/app/models/pokemon.model";
import { environment } from "src/environments/environment";

const { pokeAPI } = environment;
const { imageURL } = environment;

@Injectable({
    providedIn: 'root'
})

export class PokemonDetailsService {
    public pokemon: Pokemon;

    constructor(private readonly http: HttpClient) {

    }

    public fetchPokemonByName(name: string): void {
        this.http.get<Pokemon>(`${pokeAPI}/pokemon/${name}`)
            .pipe(
                map((pokemon: Pokemon) => ({
                  ...pokemon,
                  image: `${ imageURL }/${ pokemon.id }.png`  
                }))
            )
            .subscribe((pokemon: Pokemon) => {
                this.pokemon = pokemon;
            })
    }
}