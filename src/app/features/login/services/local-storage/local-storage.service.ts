import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'

const TRAINER_KEY :string = 'trainer'


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private trainer$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  public loading: boolean;
  public error: string = '';

  constructor() { 
    try {
      let trainer = localStorage.getItem(TRAINER_KEY)
      if (trainer) {
        this.trainer$.next(window.atob(trainer))
      }
    } catch (error) {
      console.log(error)
    }
  }

  getTrainerObservable() :Observable<string> {
    return this.trainer$.asObservable();
  }

  getTrainer() :string {
    return this.trainer$.getValue()
  }

  setTrainer(trainer: string) :void {
    this.loading = true;

    try {
      localStorage.setItem(TRAINER_KEY, window.btoa(trainer))
      this.trainer$.next(trainer)
    } catch (e) {
      //TODO: Improve this message
      this.error = e.message
    }
    this.loading = false;
  }
}
