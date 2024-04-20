import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { usePokemonContext } from '@/context/pokemon-context'
import { Link } from 'react-router-dom'

function AddPokemonToTeam() {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Em qual time deseja adicionar o Pokemon?</DialogTitle>
        <DialogDescription>
          Você consegue ver ele no seu time na página de detalhes do time!
        </DialogDescription>
      </DialogHeader>
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

export default function PokemonModalAddTeam() {
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
        {teams.length > 0 ? <AddPokemonToTeam /> : <TeamsNotFounded />}
      </DialogContent>
    </Dialog>
  )
}
