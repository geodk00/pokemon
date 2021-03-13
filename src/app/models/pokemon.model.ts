export interface Pokemon {
    id?: number;
    name: string;
    url: string;
    image?: string;
    weight?: number;
    height?: number;
    types?: PokemonType[];
    stats?: PokemonStat[];
    sprites?: PokemonSprite;
}

export interface PokemonSprite {
    back_shiny: string;
    front_shiny: string;
    other: PokemonSpriteOther
}

export interface PokemonSpriteOther {
    dream_world: any;
    'official-artwork': PokemonSpriteOfficial;
}

export interface PokemonSpriteOfficial {
    front_default: string;
}

export interface PokemonType {
    slot: number;
    type: PokemonTypeValue;
}

export interface PokemonTypeValue {
    name: string;
    url: string;
}

export interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: PokemonStatValue
}

export interface PokemonStatValue {
    name: string;
    url: string;
}