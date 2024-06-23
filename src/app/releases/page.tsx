'use client'

import { DataTable } from "@/components/DataTable"
import Header from "@/components/Header"
import { Typography } from "@mui/material"
import { Suspense } from "react"
import { columns } from "./columns"
import Form from "./form"
import { schema } from './form/schema'

const ClientsPage = () => {
    return (
        <>
            <Header />
            <Typography className="ml-5 mt-5 text-2xl text-center">
                {'Gerenciamento de Lançamentos Contábeis'}
            </Typography>
            <Suspense fallback={<p>Carregando...</p>}>
                <DataTable
                    columns={columns}
                    endpoint="/releases"
                    form={Form}
                    schema={schema}
                    dialogTitleKey="Lançamentos Contábeis"
                />
            </Suspense>
        </>
    )
}

export default ClientsPage