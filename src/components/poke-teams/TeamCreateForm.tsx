import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { RadioGroupItem, RadioGroup } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { usePokemonContext } from '@/context/pokemon-context'
import { useForm } from 'react-hook-form'
import { CreateTeamSchema } from '@/utils/create-team-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export default function TeamCreateForm() {
  const { usePostTeam } = usePokemonContext()
  const [createTeam] = usePostTeam()

  const form = useForm<z.infer<typeof CreateTeamSchema>>({
    resolver: zodResolver(CreateTeamSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  })

  const onSubmit = (data: z.infer<typeof CreateTeamSchema>) => {
    createTeam({
      variables: {
        teamName: data.name,
        description: data.description,
        theme: data.theme,
      },
    })
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">
                Dê um nome ao seu novo time...
              </FormLabel>
              <FormControl>
                <Input placeholder="Nome do time" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">
                Agora, uma descrição...
              </FormLabel>
              <FormControl>
                <Input placeholder="Descrição do time" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="theme"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">
                Selecione um tema para o seu time...
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="red" />
                    </FormControl>
                    <FormLabel className="font-normal">Valor</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="yellow" />
                    </FormControl>
                    <FormLabel className="font-normal">Amarelo</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="blue" />
                    </FormControl>
                    <FormLabel className="font-normal">Blue</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-blue-600 hover:bg-blue-700" type="submit">
          Criar time!
        </Button>
      </form>
    </Form>
  )
}
