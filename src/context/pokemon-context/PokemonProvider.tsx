import { GET_POKEMONS } from '@/graphql/queries/get-pokemons'
import { IPokemon } from '@/interfaces/pokemon'
import { IPokemonsQueryData } from '@/interfaces/pokemons-query-data'
import { pokemonsDTO } from '@/utils/pokemons.dto'
import { useLazyQuery, useQuery } from '@apollo/client'
import { useState } from 'react'
import PokemonContext from './PokemonContext'

interface ChildrenComponent {
  children: React.ReactNode
}

const PokemonProvider = ({ children }: ChildrenComponent) => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  const [totalCount, setTotalCount] = useState<number>(0)

  const useGetPokemons = () => {
    return useQuery<IPokemonsQueryData>(GET_POKEMONS, {
      variables: {
        offset: 0,
        limit: 20,
        orderBy: {
          id: 'asc',
        },
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
        limit: 20,
      },
      onCompleted: (data) => {
        setPokemons(data.pokemons.map(pokemonsDTO))
        setTotalCount(data.pokemonCount.aggregate.count)
      },
    })
  }

  const useGetPokemonById = (id: number) => {
    return useQuery<IPokemonsQueryData>(GET_POKEMONS, {
      variables: {
        where: {
          id: {
            _in: id,
          },
        },
      },
      onCompleted: (data) => {
        setPokemons(data.pokemons.map(pokemonsDTO))
        setTotalCount(data.pokemonCount.aggregate.count)
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
      onCompleted: (data) => {
        setPokemons(data.pokemons.map(pokemonsDTO))
        setTotalCount(data.pokemonCount.aggregate.count)
      },
    })
  }

  const state = {
    pokemons,
    totalCount,
    useGetPokemons,
    useGetPokemonById,
    useGetTeamsPokemons,
    useSearchPokemons,
  }

  return (
    <PokemonContext.Provider value={state}>{children}</PokemonContext.Provider>
  )
}

export default PokemonProvider
