import { ITeams } from '@/interfaces/teams'
import { TeamTheme } from '@/utils/team-theme'

export default function TeamDetail({ team }: { team: Partial<ITeams> }) {
  if (!team) {
    return <div>Time não encontrado</div>
  }
  return (
    <div className="my-8 flex flex-col items-center justify-between space-y-10 rounded-md border bg-white p-4 md:flex-row md:space-y-0">
      <div className="space-y-4">
        <div className="gap-x-1 text-lg">
          <p className="font-bold">Nome</p>{' '}
          <p className="text-sm italic">{team.name}</p>
        </div>
        <div className="gap-x-1 text-lg">
          <p className="font-bold">Lema</p>{' '}
          <p className="text-sm italic">{team.description}</p>
        </div>
      </div>

      <img
        alt="Imagem do time"
        className="h-[200px] w-[200px]"
        src={`${window.location.origin}/assets/teams/${TeamTheme[team.theme as keyof typeof TeamTheme].bgImage}`}
      />
    </div>
  )
}
