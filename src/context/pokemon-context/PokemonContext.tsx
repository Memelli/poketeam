import { IPokemon } from '@/interfaces/pokemon'
import {
  IPokemonsQueryData,
  IPokemonsToTeam,
} from '@/interfaces/pokemons-query-data'
import { ITeams } from '@/interfaces/teams'
import {
  ITeamsMutationData,
  ITeamsQueryData,
} from '@/interfaces/teams-query-data'
import type {
  ApolloCache,
  DefaultContext,
  LazyQueryResultTuple,
  MutationTuple,
  OperationVariables,
  QueryResult,
} from '@apollo/client'
import { createContext } from 'react'

export interface IPokemonContext {
  pokemons: IPokemon[]
  teamDetail: ITeams | undefined
  teams: ITeams[]
  totalCount: number
  useGetPokemons: () => QueryResult<IPokemonsQueryData, OperationVariables>
  useGetPokemonById: () => LazyQueryResultTuple<
    IPokemonsQueryData,
    OperationVariables
  >
  useGetTeamsPokemons: () => LazyQueryResultTuple<
    IPokemonsQueryData,
    OperationVariables
  >
  useSearchPokemons: () => LazyQueryResultTuple<
    IPokemonsQueryData,
    OperationVariables
  >
  usePostPokemonToTeam: () => MutationTuple<
    IPokemonsToTeam,
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >
  usePostTeam: () => MutationTuple<
    ITeamsMutationData,
    OperationVariables,
    DefaultContext,
    ApolloCache<unknown>
  >
  useGetTeams: () => QueryResult<ITeamsQueryData, OperationVariables>
  useGetTeamDetails: () => LazyQueryResultTuple<
    ITeamsQueryData,
    OperationVariables
  >
}
const PokemonContext = createContext<IPokemonContext | undefined>(undefined)

export default PokemonContext
