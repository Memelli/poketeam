import { gql } from '@apollo/client'

export const GET_TEAM_POKEMONS = gql`
query GetTeamPokemons($teamId: Int) {
  pokemons: teams_teams_pokemons(where: {teams_id: {_eq: $teamId}}) {
    teams_id
    pokemon_id
    is_deleted
    id
    added_at
  }
`
