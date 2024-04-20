import { Card } from '@/components/ui/card'
import { Link } from 'react-router-dom'

interface ITeamsCard {
  id: number
  name: string
  createdAt: Date
}

export default function TeamsCard({ id, name }: ITeamsCard) {
  return (
    <Link to={`/my-teams/${id}`}>
      <Card className="flex h-20 flex-col items-center justify-center">
        <p className="font-bold">{name}</p>
      </Card>
    </Link>
  )
}
