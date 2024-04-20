export interface IPokemon {
  id: number
  name: string
  types: string[]
  stats: Record<string, number>
}
