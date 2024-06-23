import { z } from 'zod';

export const schema = z.object({
    id: z.number().optional(),
    name: z.string()
        .nonempty('O nome é obrigatório'),
    purchasePrice: z.union([
        z.string()
            .nonempty("O preço de compra é obrigatório"),
        z.number({
            required_error: 'O preço de compra é obrigatório'
        })
    ]),
    sellingPrice: z.union([
        z.string()
            .nonempty("O preço de venda é obrigatório"),
        z.number({
            required_error: 'O preço de venda é obrigatório'
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
