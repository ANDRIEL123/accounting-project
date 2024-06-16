import { formatCurrency } from "@/utils/formatters"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<any>[] = [
    {
        accessorKey: 'name',
        header: 'Nome'
    },
    {
        accessorKey: 'purchasePrice',
        header: 'Preço de Compra',
        cell: ({ row }) => {
            return (
                <div>
                    {formatCurrency(row.getValue("purchasePrice"))}
                </div>
            )
        }
    },
    {
        accessorKey: 'sellingPrice',
        header: 'Preço de venda',
        cell: ({ row }) => {
            return (
                <div>
                    {formatCurrency(row.getValue("sellingPrice"))}
                </div>
            )
        }
    },
    {
        accessorKey: 'icmsCredit',
        header: 'ICMS crédito',
        cell: ({ row }) => {
            return (
                <div>
                    {formatCurrency(row.getValue("icmsCredit"))}
                </div>
            )
        }
    },
    {
        accessorKey: 'icmsDebit',
        header: 'ICMS débito',
        cell: ({ row }) => {
            return (
                <div>
                    {formatCurrency(row.getValue("icmsDebit"))}
                </div>
            )
        }
    }
]