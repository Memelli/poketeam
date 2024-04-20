import PokemonsList from '@/components/pokemons/PokemonsList'
import { usePokemonContext } from '@/context/pokemon-context'
import { ITeams } from '@/interfaces/teams'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function MyTeamDetail() {
  const [myTeam, setMyTeam] = useState<Partial<ITeams>>({})
  const { id } = useParams()
  const { useGetTeamDetails, pokemons, teamDetail: team } = usePokemonContext()
  useGetTeamDetails(Number(id))

  useEffect(() => {
    setMyTeam(team)
  }, [team])

  if (myTeam) {
    return (
      <div>
        {team.name}
        <PokemonsList pokemons={pokemons} />
      </div>
    )
  }
}
