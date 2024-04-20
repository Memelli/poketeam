import { z } from 'zod'

export const CreateTeamSchema = z.object({
  name: z
    .string({ required_error: 'Você precisa dar um nome ao seu time' })
    .min(5, { message: 'O nome não pode ter menos que 5 caracteres' })
    .max(100, { message: 'O nome não pode ter mais de 100 caracteres' }),
  description: z
    .string({
      required_error: 'Você precisa dar uma descrição para o seu time',
    })
    .min(15, { message: 'A descrição não pode ter menos que 15 caracteres' })
    .max(200, { message: 'A descrição não pode ter mais de 200 caracteres' }),
  theme: z.enum(['red', 'yellow', 'blue'], {
    required_error: 'Você precisa escolher um tema para o seu time',
  }),
})
