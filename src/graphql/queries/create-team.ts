import { gql } from '@apollo/client'

export const CREATE_TEAM = gql`
  mutation CreateTeam($teamName: String, $description: String, $theme: String) {
    insert_teams_teams_info(
      objects: { name: $teamName, description: $description, theme: $theme }
    ) {
      teams: returning {
        created_at
        id
        name
        theme
        description
        updated_at
        pokemons: teams_pokemons_aggregate {
          nodes {
            id
          }
        }
      }
    }
  }
`
