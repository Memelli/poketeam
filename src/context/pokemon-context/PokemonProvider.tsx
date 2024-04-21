import { GET_POKEMONS } from '@/graphql/queries/get-pokemons'
import { IPokemon } from '@/interfaces/pokemon'
import {
  IPokemonsQueryData,
  IPokemonsToTeam,
} from '@/interfaces/pokemons-query-data'
import { pokemonsDTO } from '@/utils/pokemons.dto'
import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { useState } from 'react'
import PokemonContext from './PokemonContext'
import { ADD_POKEMON_TO_TEAM } from '@/graphql/queries/post-pokemon-team'
import {
  ITeamsMutationData,
  ITeamsQueryData,
} from '@/interfaces/teams-query-data'
import { ITeams } from '@/interfaces/teams'
import { teamsDTO } from '@/utils/teams.dto'
import { GET_TEAMS } from '@/graphql/queries/get-teams'
import { CREATE_TEAM } from '@/graphql/queries/create-team'
import { useToast } from '@/components/ui/use-toast'
import { GET_TEAM_DETAILS } from '@/graphql/queries/get-team-details'

interface ChildrenComponent {
  children: React.ReactNode
}

const PokemonProvider = ({ children }: ChildrenComponent) => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  const [teamDetail, setTeamDetail] = useState<ITeams>()
  const [teams, setTeams] = useState<ITeams[]>([])
  const [totalCount, setTotalCount] = useState<number>(0)
  const { toast } = useToast()

  const useGetPokemons = () => {
    return useQuery<IPokemonsQueryData>(GET_POKEMONS, {
      variables: {
        offset: 0,
        limit: 12,
        orderBy: {
          id: 'asc',
        },
      },
      context: {
        clientName: 'PokeEndpoint',
      },
      onCompleted: (data) => {
        setPokemons(data.pokemons.map(pokemonsDTO))
        setTotalCount(data.pokemonCount.aggregate.count)
      },
    })
  }

  const useSearchPokemons = () => {
    return useLazyQuery<IPokemonsQueryData>(GET_POKEMONS, {
      variables: {
        limit: 18,
      },
      context: {
        clientName: 'PokeEndpoint',
      },
      onCompleted: (data) => {
        setPokemons(data.pokemons.map(pokemonsDTO))
        setTotalCount(data.pokemonCount.aggregate.count)
      },
    })
  }

  const useGetPokemonById = () => {
    return useLazyQuery<IPokemonsQueryData>(GET_POKEMONS, {
      context: {
        clientName: 'PokeEndpoint',
      },
      onCompleted: (data) => {
        setPokemons(data.pokemons.map(pokemonsDTO))
        setTotalCount(data.pokemonCount.aggregate.count)
      },
    })
  }

  const useGetTeams = () => {
    return useQuery<ITeamsQueryData>(GET_TEAMS, {
      variables: {
        orderBy: {
          id: 'asc',
        },
      },
      context: {
        clientName: 'HasuraEndpoint',
      },
      onCompleted: (data) => {
        setTeams(data.teams.map(teamsDTO))
      },
    })
  }

  const useGetTeamsPokemons = () => {
    return useLazyQuery<IPokemonsQueryData>(GET_POKEMONS, {
      context: {
        clientName: 'PokeEndpoint',
      },
      onCompleted: (data) => {
        setPokemons(data.pokemons.map(pokemonsDTO))
        setTotalCount(data.pokemonCount.aggregate.count)
      },
    })
  }

  const usePostTeam = () => {
    return useMutation<ITeamsMutationData>(CREATE_TEAM, {
      context: {
        clientName: 'HasuraEndpoint',
      },
      onCompleted: (data) => {
        toast({
          description: 'Seu time foi criado!',
        })
        const newTeam = data.insert_teams_teams_info.teams.map(teamsDTO)
        setTeams((state) => [...state, newTeam[0]])
      },
    })
  }

  const useGetTeamDetails = () => {
    return useLazyQuery<ITeamsQueryData>(GET_TEAM_DETAILS, {
      onCompleted: (data) => {
        setTeamDetail(data.teams.map(teamsDTO)[0])
      },
    })
  }

  const usePostPokemonToTeam = () => {
    return useMutation<IPokemonsToTeam>(ADD_POKEMON_TO_TEAM, {
      context: {
        clientName: 'HasuraEndpoint',
      },
      onCompleted: () => {
        toast({
          description: 'Pokemon adicionado com sucesso ao time!',
        })
      },
    })
  }

  const state = {
    pokemons,
    teamDetail,
    teams,
    totalCount,
    useGetPokemons,
    useGetPokemonById,
    useGetTeams,
    usePostTeam,
    useGetTeamsPokemons,
    useSearchPokemons,
    useGetTeamDetails,
    usePostPokemonToTeam,
  }

  return (
    <PokemonContext.Provider value={state}>{children}</PokemonContext.Provider>
  )
}

export default PokemonProvider
