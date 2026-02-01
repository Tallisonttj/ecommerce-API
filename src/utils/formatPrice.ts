

export const FormatPrice = (n:number) => {

   let formated  =  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    currencyDisplay:'symbol'
}).format(n)
 return formated

} 
