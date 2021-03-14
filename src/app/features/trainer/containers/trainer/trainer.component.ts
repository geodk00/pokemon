import { Component } from "@angular/core";
import { LocalStorageService } from "src/app/features/login/services/local-storage/local-storage.service";
import { Pokemon } from "src/app/models/pokemon.model";

@Component({
    selector: 'app-trainer',
    templateUrl: './trainer.component.html'
})

export class TrainerContainer {
    constructor(private readonly localStorageService: LocalStorageService) {}

    get pokemon() :Pokemon[] {
        return this.localStorageService.getPokemon()
    }
}