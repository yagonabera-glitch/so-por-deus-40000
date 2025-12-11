export const formatoService = {
    PrecoBR: (preco: number): string => {
        return `${preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })}`
    },
    pesoEmKg: (ValorPeso: number): string => {
        return `${ValorPeso.toLocaleString('pt-BR', 
        {minimumFractionDigits: 3})} kg`
    }
}