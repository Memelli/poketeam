import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import TeamCreateForm from './TeamCreateForm'

export default function TeamCreateModal() {
  return (
    <Dialog>
      <DialogTrigger asChild className="w-fit">
        <button className="rounded-md border bg-blue-400 px-4 py-2 text-white shadow-md hover:bg-blue-500">
          Criar um novo time
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crie um novo time!</DialogTitle>
        </DialogHeader>
        <TeamCreateForm />
      </DialogContent>
    </Dialog>
  )
}
