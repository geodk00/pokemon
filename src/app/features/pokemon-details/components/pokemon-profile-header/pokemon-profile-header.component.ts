import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Pokemon } from "src/app/models/pokemon.model";

@Component({
    selector: 'app-pokemon-profile-header',
    templateUrl: './pokemon-profile-header.component.html',
    styleUrls: ['./pokemon-profile-header.component.css']
})

export class PokemonProfileHeaderComponent {
    @Input() pokemon: Pokemon;
    @Input() collectedPokemon: boolean;

    @Output() collect: EventEmitter<void> = new EventEmitter();
    @Output() remove: EventEmitter<void> = new EventEmitter();

    handleCollect() {
        this.collect.emit();
    }

    handleRemove() {
        this.remove.emit();
    }
}