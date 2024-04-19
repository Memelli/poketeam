export interface IPokemonsQueryData {
  pokemons: {
    id: number
    name: string
    info: {
      nodes: {
        height: number
        weight: number
        types: {
          type: {
            name: string
          }
        }[]
        stats: {
          base_stat: number
          stat: { name: string }
        }[]
      }[]
    }
  }[]
  pokemonCount: {
    aggregate: {
      count: number
    }
  }
}
