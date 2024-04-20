import { gql } from '@apollo/client'

export const GET_TEAM_DETAILS = gql`
  query GetTeamDetails($id: Int) {
    teams: teams_teams_info(where: { id: { _eq: $id } }) {
      created_at
      description
      id
      name
      theme
      updated_at
      pokemons: teams_pokemons_aggregate(order_by: { id: asc }) {
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
