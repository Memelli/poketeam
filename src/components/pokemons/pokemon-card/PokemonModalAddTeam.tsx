import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { RadioGroupItem, RadioGroup } from '@/components/ui/radio-group'
import { toast } from '@/components/ui/use-toast'
import { usePokemonContext } from '@/context/pokemon-context'
import { ITeams } from '@/interfaces/teams'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function AddPokemonToTeam({
  teams,
  pokemonId,
}: {
  teams: ITeams[]
  pokemonId: number
}) {
  const { usePostPokemonToTeam } = usePokemonContext()
  const [addPokemon] = usePostPokemonToTeam()
  const [id, setId] = useState(0)
  const handleSubmit = () => {
    if (id === 0) {
      return toast({
        variant: 'destructive',
        description: 'Você precisa selecionar um time',
      })
    }

    addPokemon({
      variables: {
        teamId: Number(id),
        pokemonId,
      },
    })
  }
  return (
    <>
      <DialogHeader>
        <DialogTitle>Em qual time deseja adicionar o Pokemon?</DialogTitle>
        <DialogDescription>
          Você consegue ver ele no seu time na página de detalhes do time!
        </DialogDescription>
      </DialogHeader>
      <RadioGroup
        onValueChange={(value) => setId(Number(value))}
        className="flex flex-col"
      >
        {teams.map((team) => (
          <div key={team.id} className="flex items-center gap-x-2">
            <RadioGroupItem value={String(team.id)} id={String(team.id)}>
              {team.name}
            </RadioGroupItem>
            <Label htmlFor={String(team.id)}>{team.name}</Label>
          </div>
        ))}
      </RadioGroup>
      <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleSubmit}>
        Pronto!
      </Button>
    </>
  )
}

function TeamsNotFounded() {
  return (
    <DialogHeader>
      <DialogTitle>
        Nenhum time foi encontrado! <Link to="/my-teams">Crie um agora!</Link>
      </DialogTitle>
    </DialogHeader>
  )
}

export default function PokemonModalAddTeam({ id }: { id: number }) {
  const { teams, useGetTeams } = usePokemonContext()
  useGetTeams()
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="rounded-md border bg-blue-400 px-4 py-2 text-white shadow-md hover:bg-blue-500">
          Adicionar
        </button>
      </DialogTrigger>
      <DialogContent>
        {teams.length > 0 ? (
          <AddPokemonToTeam teams={teams} pokemonId={id} />
        ) : (
          <TeamsNotFounded />
        )}
      </DialogContent>
    </Dialog>
  )
}
