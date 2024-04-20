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

export interface IPokemonsToTeam {
  pokemons: {
    returning: {
      added_at: Date
      id: number
      is_deleted: boolean
      pokemon_id: number
      teams_id: number
    }
  }
}
