import { IPokemon } from '@/interfaces/pokemon'
import { IPokemonsQueryData } from '@/interfaces/pokemons-query-data'
import type {
  LazyQueryResultTuple,
  OperationVariables,
  QueryResult,
} from '@apollo/client'
import { createContext } from 'react'

export interface IPokemonContext {
  pokemons: IPokemon[]
  totalCount: number
  useGetPokemons: () => QueryResult<IPokemonsQueryData, OperationVariables>
  useGetPokemonById: (
    id: number,
  ) => QueryResult<IPokemonsQueryData, OperationVariables>
  useGetTeamsPokemons: (
    ids: number[],
  ) => QueryResult<IPokemonsQueryData, OperationVariables>
  useSearchPokemons: () => LazyQueryResultTuple<
    IPokemonsQueryData,
    OperationVariables
  >
}

const PokemonContext = createContext<IPokemonContext | undefined>(undefined)

export default PokemonContext
