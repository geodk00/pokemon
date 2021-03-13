import { Component, Input } from "@angular/core";
import { Pokemon } from "src/app/models/pokemon.model";
import { PokemonService } from "../../services/pokemon/pokemon.service";

@Component({
    selector: 'app-pokemon-pagination',
    templateUrl: './pokemon-pagination.component.html'
})

export class PokemonPaginationComponent {
    @Input() pokemon: Pokemon[] = [];
    
    constructor(private readonly pokemonService: PokemonService) {

    }

    get isFirstPage(): boolean {
        return this.pokemonService.paginator && this.pokemonService.paginator.getPagination().isFirstPage
    }

    get isLastPage(): boolean {
        return this.pokemonService.paginator && this.pokemonService.paginator.getPagination().isLastPage
    }

    onPrevClick(): void {
        this.pokemonService.paginator.prev()
    }

    onNextClick(): void {
        this.pokemonService.paginator.next()
    }
}