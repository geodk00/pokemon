import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/features/login/services/local-storage/local-storage.service';
import { Pokemon } from 'src/app/models/pokemon.model';

/*
    Component that displays the collected pokemon.
    Reuses the grid from the pokemon feature to do this.
*/

@Component({
    selector: 'app-trainer',
    templateUrl: './trainer.component.html'
})

export class TrainerComponent {
    constructor(private readonly localStorageService: LocalStorageService) { }

    get pokemon(): Pokemon[] {
        return this.localStorageService.getPokemon();
    }
}
