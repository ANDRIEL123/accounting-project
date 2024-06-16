import { z } from 'zod';

export const schema = z.object({
    id: z.number().optional(),
    name: z.string()
        .nonempty('O nome é obrigatório'),
    cpfCnpj: z.string()
        .nonempty('O CPF/CNPJ é obrigatório'),
    city: z.string()
        .nonempty('A cidade é obrigatória'),
    state: z.string()
        .nonempty('O estado é obrigatório'),
    type: z.number()
});
