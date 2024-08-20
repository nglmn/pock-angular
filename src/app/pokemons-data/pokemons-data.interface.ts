export interface InputStatistic {
  base_stat: number;
  effort: number;
  stat: Stat;
}
export interface Stat {
  name: StatName;
  url: string;
}
export enum StatName {
  'hp' = 'hp',
  'attack' = 'attack',
  'defense' = 'defense',
  'special-attack' = 'special-attack',
  'special-defense' = 'special-defense',
  'speed' = 'speed',
}
export type Statistics = {
  [key in StatName]: number;
};
export interface Pokemon {
  name: string;
  statistics: Statistics;
}

export interface PokemonsSummary {
  name: string;
  url: string;
}
export interface PokemonsList {
  results: PokemonsSummary[];
}
