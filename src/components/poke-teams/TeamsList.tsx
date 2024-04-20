import TeamsCard from './poke-teams-card/TeamsCard'
import { ITeams } from '@/interfaces/teams'

export default function TeamsList({ teams }: { teams: ITeams[] }) {
  return (
    <div>
      <section>
        <div>
          {teams.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {teams.map((teams: ITeams) => (
                <TeamsCard key={teams.id} {...teams} />
              ))}
            </div>
          ) : (
            <div>Nenhum time criado ainda</div>
          )}
        </div>
      </section>
    </div>
  )
}
