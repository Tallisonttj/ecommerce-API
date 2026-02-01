

export const FormatPrice = (n:number) => {

   const formated  =  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    currencyDisplay:'symbol'
}).format(n)
 return formated

} 
