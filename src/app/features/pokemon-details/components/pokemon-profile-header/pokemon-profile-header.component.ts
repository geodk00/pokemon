import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

/*
    Component that display the name and image of a pokemon as well as a button to
    collect/remove the pokemon.
*/

@Component({
    selector: 'app-pokemon-profile-header',
    templateUrl: './pokemon-profile-header.component.html',
    styleUrls: ['./pokemon-profile-header.component.css']
})

export class PokemonProfileHeaderComponent {
    @Input() pokemon: Pokemon;
    @Input() collectedPokemon: boolean;

    @Output() collect: EventEmitter<void> = new EventEmitter<void>();
    @Output() remove: EventEmitter<void> = new EventEmitter<void>();

    handleCollect(): void {
        this.collect.emit();
    }

    handleRemove(): void {
        this.remove.emit();
    }
}
