import { gql } from '@apollo/client'

export const ADD_POKEMON_TO_TEAM = gql`
  mutation ($teamId: Int, $pokemonId: Int) {
    pokemons: insert_teams_teams_pokemons(
      objects: { teams_id: $teamId, pokemon_id: $pokemonId }
    ) {
      returning {
        added_at
        id
        is_deleted
        pokemon_id
        teams_id
      }
    }
  }
`
