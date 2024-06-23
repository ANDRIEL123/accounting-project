import { ColumnDef } from "@tanstack/react-table"
import { formatTypeAccount } from "./utils"

export const columns: ColumnDef<any>[] = [
    {
        accessorKey: 'code',
        header: 'Código'
    },
    {
        accessorKey: 'name',
        header: 'Nome'
    },
    {
        accessorKey: 'type',
        header: 'Tipo',
        cell: ({ row }) => {
            return (
                <div>
                    {formatTypeAccount(row.getValue("type"))}
                </div>
            )
        }
    }
]