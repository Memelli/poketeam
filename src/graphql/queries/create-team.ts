import { gql } from '@apollo/client'

export const CREATE_TEAM = gql`
  mutation CreateTeam($teamName: String) {
    insert_teams_teams_info(objects: { name: $teamName }) {
      teams: returning {
        created_at
        id
        name
        updated_at
      }
    }
  }
`
