import { gql } from '@apollo/client'

export const GET_TEAM_DETAILS = gql`
  query MyQuery($teamId: Int = 10) {
    teams: teams_teams_info(where: { id: { _eq: $teamId } }) {
      created_at
      id
      name
      updated_at
    }
  }
`
