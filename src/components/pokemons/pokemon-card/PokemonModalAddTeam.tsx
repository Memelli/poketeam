import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export default function PokemonModalAddTeam() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="rounded-md border bg-blue-400 px-4 py-2 text-white shadow-md hover:bg-blue-500">
          Adicionar
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Em qual time deseja adicionar o Pokemon?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
