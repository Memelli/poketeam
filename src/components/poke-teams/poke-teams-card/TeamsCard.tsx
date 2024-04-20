import { Card } from '@/components/ui/card'
import { TeamTheme } from '@/utils/team-theme'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

interface ITeamsCard {
  id: number
  name: string
  description: string
  theme: string
  createdAt: Date
}

export default function TeamsCard({
  id,
  name,
  description,
  theme,
}: ITeamsCard) {
  return (
    <Link to={`/my-teams/${id}`}>
      <Card
        className={clsx(
          'flex flex-col items-center justify-center py-2',
          TeamTheme[theme as keyof typeof TeamTheme].border,
        )}
      >
        <img
          alt="Imagem dos times com as cores relacionadas ao mesmo"
          className="h-20 w-20"
          src={`${window.location.origin}/assets/teams/${TeamTheme[theme as keyof typeof TeamTheme].bgImage}`}
        />
        <p className="font-bold">{name}</p>
        <p className="text-sm font-light italic">{description}</p>
      </Card>
    </Link>
  )
}
