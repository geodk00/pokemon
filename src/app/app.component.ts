import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { LocalStorageService } from './features/login/services/local-storage/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'pokemon';

  trainer$: Observable<string>
  trainerSubscription: Subscription
  trainer: string

  constructor(private localStorageService: LocalStorageService) {

  }

  ngOnInit(): void {
    this.trainerSubscription = this.localStorageService.getTrainer().subscribe((event) => this.trainer = event);
  }

  ngOnDestroy(): void {
    this.trainerSubscription.unsubscribe();
  }

  onClick(input: string) {
   console.log(input)
   this.localStorageService.setTrainer(input)
  }
}
