import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'
import { Pokemon } from 'src/app/models/pokemon.model';

const TRAINER_KEY :string = 'trainer'
const POKEMON_KEY :string = 'pkmon'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private trainer$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  private pokemon$: BehaviorSubject<Pokemon[]> = new BehaviorSubject<Pokemon[]>([]);

  public loading: boolean;
  public error: string = '';

  constructor() { 
    try {
      let trainer = localStorage.getItem(TRAINER_KEY);
      let pokemon = localStorage.getItem(POKEMON_KEY);
      if (trainer && pokemon) {
        this.trainer$.next(window.atob(trainer));
        this.pokemon$.next(JSON.parse(window.atob(pokemon)));
      }
    } catch (error) {
      console.log(error);
    }
  }

  getTrainerObservable() :Observable<string> {
    return this.trainer$.asObservable();
  }

  getTrainer() :string {
    return this.trainer$.getValue();
  }

  setTrainer(trainer: string) :void {
    this.loading = true;

    try {
      localStorage.setItem(TRAINER_KEY, window.btoa(trainer));
      localStorage.setItem(POKEMON_KEY, window.btoa(JSON.stringify([])));
      this.trainer$.next(trainer);
      this.pokemon$.next([]);
    } catch (e) {
      //TODO: Improve this message
      this.error = e.message;
    }
    this.loading = false;
  }

  getPokemonObservable() :Observable<Pokemon[]> {
    return this.pokemon$.asObservable();
  }

  getPokemon() :Pokemon[] {
    return this.pokemon$.getValue();
  }

  addPokemon(newPokemon :Pokemon) :void{
    const newPokemons :Pokemon[] = [...this.pokemon$.value, newPokemon]

    this.pokemon$.next(newPokemons);
    localStorage.setItem(POKEMON_KEY, window.btoa(JSON.stringify(newPokemons)));
  }

  removePokemon(id :number) :void {
    const newPokemons :Pokemon[] = this.pokemon$.value.filter(pokemon => pokemon.id !== id);
    localStorage.setItem(POKEMON_KEY, window.btoa(JSON.stringify(newPokemons)));
    this.pokemon$.next(newPokemons);
  }

}
