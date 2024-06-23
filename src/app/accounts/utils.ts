export const formatTypeAccount = (type: number) => {
    switch (type) {
        case 0:
            return 'Ativo'
        case 1:
            return 'Passivo'
        case 2:
            return 'Patrimônio Líquido'
        default:
            return 'Indefinido'
    }
}