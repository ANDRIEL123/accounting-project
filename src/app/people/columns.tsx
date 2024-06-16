import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<any>[] = [
    {
        accessorKey: 'name',
        header: 'Nome'
    },
    {
        accessorKey: 'cpfCnpj',
        header: 'CPF/CNPJ'
    },
    {
        accessorKey: 'city',
        header: 'Cidade'
    },
    {
        accessorKey: 'state',
        header: 'Estado'
    },
    {
        accessorKey: 'type',
        header: 'Tipo',
        cell: ({ row }) => {
            return (
                <div>
                    {row.getValue("type") === 0 ? 'Cliente' : 'Fornecedor'}
                </div>
            )
        }
    }
]