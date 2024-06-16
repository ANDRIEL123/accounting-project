'use client'

import Header from "@/components/Header"

export const Main = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col justify-center items-center h-[calc(100vh-5rem)]">
                <h1 className="text-center text-4xl">Bem vindo ao Software Contábil</h1>
            </div>
        </>
    )
}