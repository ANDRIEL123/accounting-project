import { z } from 'zod';

export const schema = z.object({
    id: z.number().optional(),
    name: z.string()
        .nonempty('O nome é obrigatório'),
    code: z.string()
        .nonempty('O código é obrigatório'),
    type: z.number({
        required_error: 'O tipo é obrigatório'
    }),
    current: z.union([
        z.number().optional(),
        z.string().optional(),
        z.null()
    ]).optional(),
    matchAccountId: z.union([
        z.number().optional(),
        z.string().optional(),
        z.null()
    ]).optional(),
});
