import { z } from 'zod'

const cartSchemaBody = z.object({
  cartName: z
    .string({ required_error: 'Campo obrigatório' })
    .nonempty('Nome do produto requerido'),
  totalPrice: z
    .number({ required_error: 'Campo obrigatório' })
    .min(0.1, 'Limite da sacola obrigatório'),
})

export { cartSchemaBody }
