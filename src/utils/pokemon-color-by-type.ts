import { PokemonEnumTypes } from '../interfaces/pokemon-enum-types'

export const PokemonColorByType = Object.freeze({
  [PokemonEnumTypes.Normal]: 'bg-gray-500',
  [PokemonEnumTypes.Fire]: 'bg-red-500',
  [PokemonEnumTypes.Fighting]: 'bg-red-800',
  [PokemonEnumTypes.Water]: 'bg-blue-300',
  [PokemonEnumTypes.Flying]: 'bg-indigo-500',
  [PokemonEnumTypes.Grass]: 'bg-green-300',
  [PokemonEnumTypes.Poison]: 'bg-indigo-700',
  [PokemonEnumTypes.Electric]: 'bg-yellow-400',
  [PokemonEnumTypes.Ground]: 'bg-yellow-900',
  [PokemonEnumTypes.Psychic]: 'bg-pink-400',
  [PokemonEnumTypes.Rock]: 'bg-yellow-700',
  [PokemonEnumTypes.Ice]: 'bg-blue-200',
  [PokemonEnumTypes.Bug]: 'bg-green-600',
  [PokemonEnumTypes.Dragon]: 'bg-yellow-800',
  [PokemonEnumTypes.Ghost]: 'bg-indigo-300',
  [PokemonEnumTypes.Dark]: 'bg-gray-900',
  [PokemonEnumTypes.Steel]: 'bg-gray-400',
  [PokemonEnumTypes.Fairy]: 'bg-pink-300',
})
