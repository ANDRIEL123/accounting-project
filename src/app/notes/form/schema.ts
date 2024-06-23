import { z } from 'zod';

export const schema = z.object({
    id: z.number().optional(),
    signal: z.number(),
    operation: z.number(),
    personId: z.union([
        z.number({
            required_error: 'O cliente/fornecedor é obrigatório'
        }),
        z.string()
            .nonempty('O cliente/fornecedor é obrigatório')
    ]),
    assetId: z.union([
        z.number({
            required_error: 'O bem/produto é obrigatório'
        }),
        z.string()
            .nonempty('O bem/produto é obrigatório')
    ]),
});
