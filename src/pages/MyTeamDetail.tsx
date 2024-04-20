import PokemonsList from '@/components/pokemons/PokemonsList'
import { usePokemonContext } from '@/context/pokemon-context'
import { TeamTheme } from '@/utils/team-theme'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function MyTeamDetail() {
  const { id } = useParams()
  const { useGetTeamDetails, pokemons, teamDetail: team } = usePokemonContext()

  const [getTeam, { loading }] = useGetTeamDetails()

  useEffect(() => {
    getTeam({
      variables: {
        id,
      },
    })
  }, [id])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <p>
        Bem vindo a central do seu time! Aqui você poderá ver algumas
        informações sobre ele.
      </p>
      <div className="my-8 flex flex-col items-center justify-between space-y-10 rounded-md border p-4 md:flex-row md:space-y-0">
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
      <PokemonsList pokemons={pokemons} />
    </>
  )
}
