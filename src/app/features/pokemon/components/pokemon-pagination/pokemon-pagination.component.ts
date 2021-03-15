import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from '../../services/pokemon/pokemon.service';

/*
    Component that wraps any component that
    accepts an array and paginates it.

    Uses the paginator utility in PokemonService
*/

@Component({
    selector: 'app-pokemon-pagination',
    templateUrl: './pokemon-pagination.component.html',
    styles: [`.center{ text-align: center; }`, `p { display: inline; }`]
})

export class PokemonPaginationComponent {
    @Input() pokemon: Pokemon[] = [];

    constructor(private readonly pokemonService: PokemonService) {

    }

    get isFirstPage(): boolean {
        return this.pokemonService.paginator && this.pokemonService.paginator.getPagination().isFirstPage;
    }

    get isLastPage(): boolean {
        return this.pokemonService.paginator && this.pokemonService.paginator.getPagination().isLastPage;
    }

    get totalPages(): number {
        return this.pokemonService.paginator.getPagination().pages;
    }

    get currentPage(): number {
        return this.pokemonService.paginator.getPagination().currentPage;
    }

    onPrevClick(): void {
        this.pokemonService.paginator.prev();
    }

    onNextClick(): void {
        this.pokemonService.paginator.next();
    }

    onFirstClick(): void {
        this.pokemonService.paginator.first();
    }

    onLastClick(): void {
        this.pokemonService.paginator.last();
    }
}
