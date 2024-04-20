export interface ITeamsQueryData {
  teams: {
    id: number
    name: string
    theme: string
    description: string
    created_at: Date
    updated_at: Date
    pokemons: {
      nodes: {
        teams_id: number
        pokemon_id: number
        is_deleted: false
        id: number
        added_at: Date
      }[]
    }
  }[]
}

export interface ITeamsMutationData {
  insert_teams_teams_info: ITeamsQueryData
}
