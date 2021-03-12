import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private trainer: string;
  private trainer$

  constructor() { 
    try {
      this.trainer = localStorage.getItem('trainer');
      this.trainer$ = new BehaviorSubject<string>(this.trainer)
    } catch (error) {
      console.log(error)
    }
  }

  getTrainer() :Observable<string> {
    return this.trainer$.asObservable();
  }

  setTrainer(trainer: string) :void {
    this.trainer = trainer
    localStorage.setItem('trainer', this.trainer)
    this.trainer$.next(this.trainer)
  }
}
