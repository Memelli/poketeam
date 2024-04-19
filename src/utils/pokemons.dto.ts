import type { IPokemon } from '@/interfaces/pokemon'
import type { IPokemonsQueryData } from '@/interfaces/pokemons-query-data'

export const pokemonsDTO = ({
  id,
  name,
  info,
}: IPokemonsQueryData['pokemons'][0]): IPokemon => {
  return {
    id,
    name,
    types: Array.from(
      new Set(
        info.nodes
          .map((node) => node.types)
          .flat()
          .map(({ type }) => type.name),
      ),
    ),
    stats: info.nodes
      .map((node) => node.stats)
      .flat()
      .reduce(
        (obj, { base_stat, stat }) => {
          obj[stat.name] = base_stat
          return obj
        },
        {} as Record<string, number>,
      ),
  }
}
