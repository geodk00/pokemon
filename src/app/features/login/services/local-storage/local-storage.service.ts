import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon.model';

/*
  Service that acts as a store for the state.
  State is saved to localStorage and available as both
  "normal" fields as well as Subjects.

  state is base64 encoded before it is saved to localStorage
*/

const TRAINER_KEY = 'trainer';
const POKEMON_KEY = 'pkmon';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private trainer$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  private pokemon$: BehaviorSubject<Pokemon[]> = new BehaviorSubject<Pokemon[]>([]);

  public loading = false;
  public error = '';

  // check if we have state in localStorage and restore it if we do
  // state is base64 encoded. Error will be thrown if cookies are blocked.
  constructor() {
    try {
      const trainer = localStorage.getItem(TRAINER_KEY);
      const pokemon = localStorage.getItem(POKEMON_KEY);
      if (trainer && pokemon) {
        this.trainer$.next(window.atob(trainer));
        this.pokemon$.next(JSON.parse(window.atob(pokemon)));
      }
    } catch (error: any) {
      this.error = error.message;
    }
  }

  getTrainerObservable(): Observable<string> {
    return this.trainer$.asObservable();
  }

  getTrainer(): string {
    return this.trainer$.getValue();
  }

  // Save the trainer to localStorage
  // Also set an empty collected pokemon array
  setTrainer(trainer: string): void {
    this.loading = true;

    try {
      localStorage.setItem(TRAINER_KEY, window.btoa(trainer));
      this.setPokemon([]);
      this.trainer$.next(trainer);
      this.pokemon$.next([]);
    } catch (e) {
      this.error = e.message;
    }
    this.loading = false;
  }

  getPokemonObservable(): Observable<Pokemon[]> {
    return this.pokemon$.asObservable();
  }

  getPokemon(): Pokemon[] {
    return this.pokemon$.getValue();
  }

  addPokemon(newPokemon: Pokemon): void {
    const newPokemons: Pokemon[] = [...this.pokemon$.value, newPokemon];

    this.pokemon$.next(newPokemons);
    this.setPokemon(newPokemons);
  }

  removePokemon(id: number): void {
    const newPokemons: Pokemon[] = this.pokemon$.value.filter(pokemon => pokemon.id !== id);
    this.setPokemon(newPokemons);
    this.pokemon$.next(newPokemons);
  }

  // stringify and base64 encode the array
  private setPokemon(pokemon: Pokemon[]): void {
    localStorage.setItem(POKEMON_KEY, window.btoa(JSON.stringify(pokemon)));
  }
}
