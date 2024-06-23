'use client'

import Header from "@/components/Header"
import { Typography } from "@mui/material"
import { Suspense } from "react"
import { PatrimonyBalanceReport } from "./balancePatrimony"

const PatrimonyBalancePage = () => {
    return (
        <>
            <Header />
            <Typography className="ml-5 mt-5 text-2xl text-center">
                {'Balanço Patrimonial '}
            </Typography>
            <Suspense fallback={<p>Carregando...</p>}>
                <PatrimonyBalanceReport />
            </Suspense>
        </>
    )
}

export default PatrimonyBalancePage