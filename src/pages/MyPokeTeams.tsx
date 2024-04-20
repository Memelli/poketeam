import TeamsList from '@/components/poke-teams/TeamsList'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { usePokemonContext } from '@/context/pokemon-context'
import { useState } from 'react'

export default function MyPokeTeam() {
  const [name, setName] = useState('')
  const { teams, useGetTeams, usePostTeam } = usePokemonContext()
  const { loading } = useGetTeams()

  const [createTeam, { loading: createLoading }] = usePostTeam()

  const handleCreateTeam = () => {
    createTeam({
      variables: {
        teamName: name,
      },
    })
  }

  if (loading) {
    return <div>Carregando...</div>
  }

  return (
    <section className="flex flex-col gap-y-2">
      <Dialog>
        <DialogTrigger asChild>
          <button className="rounded-md border bg-blue-400 px-4 py-2 text-white shadow-md hover:bg-blue-500">
            Criar um novo time
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Crie um novo time!</DialogTitle>
          </DialogHeader>
          <Input
            placeholder="Nome do time"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button onClick={handleCreateTeam}>Criar Time</Button>
          {createLoading ? 'Carregando...' : null}
        </DialogContent>
      </Dialog>
      <TeamsList teams={teams} />
    </section>
  )
}
