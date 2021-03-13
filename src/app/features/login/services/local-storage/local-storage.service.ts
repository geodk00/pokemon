import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private trainer: string = null;
  private trainer$

  public loading: boolean;
  public error: string = '';

  constructor() { 
    try {
      this.trainer = localStorage.getItem('trainer');
      this.trainer$ = new BehaviorSubject<string>(this.trainer)
    } catch (error) {
      console.log(error)
    }
  }

  getTrainerObservable() :Observable<string> {
    return this.trainer$.asObservable();
  }

  getTrainer() :string {
    return this.trainer
  }

  setTrainer(trainer: string) :void {
    this.loading = true;

    try {
      this.trainer = trainer
      localStorage.setItem('trainer', this.trainer)
      this.trainer$.next(this.trainer)
    } catch (e) {
      //TODO: Improve this message
      this.error = e.message
    }
    this.loading = false;
  }
}
