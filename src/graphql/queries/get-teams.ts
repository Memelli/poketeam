import { gql } from '@apollo/client'

export const GET_TEAMS = gql`
  query GetTeams {
    teams: teams_teams_info(order_by: { id: asc }) {
      created_at
      id
      theme
      description
      name
      pokemons: teams_pokemons_aggregate(order_by: { pokemon_id: asc }) {
        nodes {
          teams_id
          pokemon_id
          is_deleted
          id
          added_at
        }
      }
    }
  }
`
