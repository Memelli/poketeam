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

interface ChildrenComponent {
  children: React.ReactNode
}

const PokemonProvider = ({ children }: ChildrenComponent) => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  const [teamDetail, setTeamDetail] = useState<Partial<ITeams>>({})
  const [teams, setTeams] = useState<ITeams[]>([])
  const [totalCount, setTotalCount] = useState<number>(0)

  const useGetPokemons = () => {
    return useQuery<IPokemonsQueryData>(GET_POKEMONS, {
      variables: {
        offset: 0,
        limit: 18,
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
        console.log(data.teams.map(teamsDTO))
        setTeams(data.teams.map(teamsDTO))
      },
    })
  }

  const useGetTeamsPokemons = (ids: number[]) => {
    return useQuery<IPokemonsQueryData>(GET_POKEMONS, {
      variables: {
        orderBy: {
          id: 'asc',
        },
        where: {
          id: {
            _in: ids,
          },
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

  const usePostTeam = () => {
    return useMutation<ITeamsMutationData>(CREATE_TEAM, {
      context: {
        clientName: 'HasuraEndpoint',
      },
      onCompleted: (data) => {
        console.log(data)
        const newTeam = data.insert_teams_teams_info.teams.map(teamsDTO)
        setTeams((state) => [...state, newTeam[0]])
      },
    })
  }

  const useGetTeamDetails = (id: number) => {
    const teamFounded = teams.find((team) => team.id === id)
    const [searchPokemons] = useGetPokemonById()
    if (teamFounded) {
      setTeamDetail(teamFounded)
      searchPokemons({
        variables: {
          where: {
            id: {
              _in: teamFounded.pokemons,
            },
          },
        },
      })
    }
  }

  const usePostPokemonToTeam = () => {
    return useMutation<IPokemonsToTeam>(ADD_POKEMON_TO_TEAM, {
      context: {
        clientName: 'HasuraEndpoint',
      },
      onCompleted: (data) => {
        console.log(data)
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
