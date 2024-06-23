import { z } from 'zod';

export const schema = z.object({
    id: z.number().optional(),
    totalAmount: z.union([
        z.string()
            .nonempty("O valor é obrigatório"),
        z.number({
            required_error: 'O valor é obrigatório'
        })
    ]),
    accountId: z.union([
        z.number({
            required_error: 'A conta contábil é obrigatória'
        }),
        z.string()
            .nonempty('A conta contábil é obrigatória')
    ]),
    type: z.number({
        required_error: 'O tipo é obrigatório'
    })
});
