import { Pokemon } from './pokemon.model';

export interface PokemonResponse {
    count: number;
    next: string;
    prev: string;
    results: Pokemon[];

}
