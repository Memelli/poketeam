/* eslint-disable camelcase */
import { ITeams } from '@/interfaces/teams'
import { ITeamsQueryData } from '@/interfaces/teams-query-data'

export const teamsDTO = ({
  id,
  name,
  theme,
  description,
  updated_at,
  created_at,
  pokemons,
}: ITeamsQueryData['teams'][0]): ITeams => {
  return {
    pokemons: Array.from(
      new Set(pokemons.nodes.map((node) => node.pokemon_id)),
    ),
    id,
    theme,
    description,
    name,
    createdAt: created_at,
    updatedAt: updated_at,
  }
}
