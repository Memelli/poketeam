import TeamDetail from '@/components/poke-teams/TeamDetail'
import PokemonsList from '@/components/pokemons/PokemonsList'
import { usePokemonContext } from '@/context/pokemon-context'
import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'

export default function MyTeamDetail() {
  const { id } = useParams()
  const {
    useGetTeamDetails,
    pokemons,
    teamDetail: team,
    useGetTeamsPokemons,
  } = usePokemonContext()

  const [getTeam, { loading }] = useGetTeamDetails()
  const [getTeamPokemons] = useGetTeamsPokemons()
  useEffect(() => {
    getTeam({
      variables: {
        id,
      },
    })
  }, [id])

  useMemo(() => {
    getTeamPokemons({
      variables: {
        orderBy: {
          id: 'asc',
        },
        where: {
          id: {
            _in: team?.pokemons,
          },
        },
      },
    })
  }, [team])

  if (loading) {
    return <div>Loading...</div>
  }
  if (team) {
    return (
      <>
        <p className="scroll-m-20 text-xl font-semibold tracking-tight text-white">
          Bem vindo a central do seu time! Aqui você poderá ver algumas
          informações sobre ele.
        </p>
        <TeamDetail team={team} />
        <PokemonsList isAdd={false} pokemons={pokemons} />
      </>
    )
  }
}
