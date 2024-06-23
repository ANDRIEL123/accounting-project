import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<any>[] = [
    {
        accessorKey: 'assetName',
        header: 'Ben/Produto'
    },
    {
        accessorKey: 'personName',
        header: 'Cliente/Fornecedor'
    },
    {
        accessorKey: 'operation',
        header: 'Operação',
        cell: ({ row }) => {
            return (
                <div>
                    {row.getValue("operation") === 0 ? 'À vista' : 'À prazo'}
                </div>
            )
        }
    },
    {
        accessorKey: 'signal',
        header: 'Entrada/Saída',
        cell: ({ row }) => {
            return (
                <div>
                    {row.getValue("signal") === 0 ? 'Compra' : 'Venda'}
                </div>
            )
        }
    },

]