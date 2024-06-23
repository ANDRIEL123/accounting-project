import { formatCurrency } from "@/utils/formatters"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<any>[] = [
    {
        accessorKey: 'name',
        header: 'Conta Contábil'
    },
    {
        accessorKey: 'type',
        header: 'Tipo',
        cell: ({ row }) => {
            return (
                <div>
                    {row.getValue("type") === 0 ? 'Débito' : 'Crédito'}
                </div>
            )
        }
    },
    {
        accessorKey: 'totalAmount',
        header: 'Valor total',
        cell: ({ row }) => {
            return (
                <div>
                    {formatCurrency(row.getValue("totalAmount"))}
                </div>
            )
        }
    }
]