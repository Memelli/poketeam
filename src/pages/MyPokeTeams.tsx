import TeamsList from '@/components/poke-teams/TeamsList'

import { usePokemonContext } from '@/context/pokemon-context'
import TeamCreateModal from '@/components/poke-teams/TeamCreateModal'

export default function MyPokeTeam() {
  const { teams, useGetTeams } = usePokemonContext()
  const { loading } = useGetTeams()

  if (loading) {
    return <div>Carregando...</div>
  }

  return (
    <section className="flex flex-col gap-y-2">
      <TeamCreateModal />
      <TeamsList teams={teams} />
    </section>
  )
}
