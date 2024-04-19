import { PokemonTypesEnum } from '../interfaces/pokemon-enum-types'

export const PokemonColorByType = Object.freeze({
  [PokemonTypesEnum.Normal]: 'bg-gray-500',
  [PokemonTypesEnum.Fire]: 'bg-red-500',
  [PokemonTypesEnum.Fighting]: 'bg-red-800',
  [PokemonTypesEnum.Water]: 'bg-blue-300',
  [PokemonTypesEnum.Flying]: 'bg-indigo-500',
  [PokemonTypesEnum.Grass]: 'bg-green-300',
  [PokemonTypesEnum.Poison]: 'bg-indigo-700',
  [PokemonTypesEnum.Electric]: 'bg-yellow-400',
  [PokemonTypesEnum.Ground]: 'bg-yellow-900',
  [PokemonTypesEnum.Psychic]: 'bg-pink-400',
  [PokemonTypesEnum.Rock]: 'bg-yellow-700',
  [PokemonTypesEnum.Ice]: 'bg-blue-200',
  [PokemonTypesEnum.Bug]: 'bg-green-600',
  [PokemonTypesEnum.Dragon]: 'bg-yellow-800',
  [PokemonTypesEnum.Ghost]: 'bg-indigo-300',
  [PokemonTypesEnum.Dark]: 'bg-gray-900',
  [PokemonTypesEnum.Steel]: 'bg-gray-400',
  [PokemonTypesEnum.Fairy]: 'bg-pink-300',
})
