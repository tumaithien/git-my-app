const normalCurrency = {style: 'currency', currency: 'VND'}

export function formatStringAmount(amount) {
    let sign = '+'
    let amountFormated = amount
    if(amount < 0){
        sign = '-'
        amountFormated = amount * (-1) 
    }
    amountFormated = new Intl.NumberFormat('vi-VN', normalCurrency).format(amountFormated)
    amountFormated  = amountFormated.substring(0, amountFormated.length - 2)
    return `${sign} ${amountFormated}`
}
export function totalAmount(listData) {
    let total = 0
    for(let index = 0; index < listData.length; index++){
        total = total + listData[index].amount
    }
    return total
}
export function formatPercent(amount, total) {
    let percent = Math.round((amount/total) * 100)
    if(total === 0){
        return percent = 0 + '%'
    }
    if(percent < 0) {
        percent = percent * (-1)
    }
    return `${percent} %`
}