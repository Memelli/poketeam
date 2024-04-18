import PokemonsList from '@/components/pokemons/PokemonsList'
import { usePokemonContext } from '@/context/pokemon-context'
import { useEffect, useRef, useState } from 'react'

interface IPageConfig {
  page: number
  perPage: number
  total?: number
}

interface ISearchEvent {
  text: string
  selectedType: string
  sortOrder: SortOrder
}

export default function HomePage(): React.ReactNode {
  const { pokemons, useGetPokemons, useSearchPokemons } = usePokemonContext()

  const { loading } = useGetPokemons()
  const [searchPokemons, { loading: isSearchLoading }] = useSearchPokemons()

  const isMounted = useRef(false)
  const [pageConfig, setPageConfig] = useState<IPageConfig>({
    page: 1,
    perPage: 20,
  })
  const [queryFilters, setQueryFilters] = useState<ISearchEvent>({
    text: '',
    selectedType: '',
    sortOrder: '',
  })

  useEffect(() => {
    // Esse user effect só pode rodar quando não for o primeiro render
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

  if (loading) {
    return <div>Loading..</div>
  }

  return (
    <div>
      <PokemonsList pokemons={pokemons} />
    </div>
  )
}
