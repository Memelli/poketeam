import PokemonPagination from '@/components/pokemons/PokemonPagination'
import PokemonSearchBar, {
  SearchPokemonEvent,
} from '@/components/pokemons/PokemonSearchBar'
import PokemonsList from '@/components/pokemons/PokemonsList'
import { usePokemonContext } from '@/context/pokemon-context'
import { useMemo, useRef, useState } from 'react'

interface IPageConfig {
  page: number
  perPage: number
  total: number
}

export type SortOrder = '' | 'desc' | 'asc'

interface ISearchEvent {
  text: string
  selectedType: string
  sortOrder: SortOrder
}

export default function HomePage(): React.ReactNode {
  const { pokemons, totalCount, useGetPokemons, useSearchPokemons } =
    usePokemonContext()

  useGetPokemons()
  const [searchPokemons] = useSearchPokemons()

  const isMounted = useRef(false)
  const [pageConfig, setPageConfig] = useState<IPageConfig>({
    page: 1,
    perPage: 12,
    total: totalCount,
  })
  const [queryFilters, setQueryFilters] = useState<ISearchEvent>({
    text: '',
    selectedType: '',
    sortOrder: '',
  })

  useMemo(() => {
    if (!isMounted.current) {
      isMounted.current = true
      return
    }
    const { text, selectedType, sortOrder } = queryFilters
    searchPokemons({
      variables: {
        offset: (pageConfig.page - 1) * 12,
        orderBy: { ...(!!sortOrder && { name: sortOrder }) },
        where: {
          name: { _iregex: `^${text}` },
          pokemon_v2_pokemons: {
            pokemon_v2_pokemontypes: {
              pokemon_v2_type: {
                name: {
                  ...(selectedType && { _eq: selectedType }),
                },
              },
            },
          },
        },
      },
    })
  }, [
    pageConfig.page,
    queryFilters.text,
    queryFilters.selectedType,
    queryFilters.sortOrder,
  ])

  const handlerSearchPokemon = (event: Partial<SearchPokemonEvent>) => {
    setPageConfig({ ...pageConfig, page: 1 })
    setQueryFilters({ ...queryFilters, ...event })
  }

  return (
    <div>
      <PokemonSearchBar {...queryFilters} onSearch={handlerSearchPokemon} />
      <div className="flex h-14 justify-center">
        <PokemonPagination
          {...pageConfig}
          total={totalCount}
          onPageChange={(page) => setPageConfig({ ...pageConfig, page })}
        />
      </div>
      <PokemonsList isAdd={true} pokemons={pokemons} />
    </div>
  )
}
