console.log('BK:' + bk)

if (bk <= 35) {
    bk_desc = bk - (bk * 0.05)
    console.log('Desconto de 5%. Valor com desconto: ' + bk_desc)
} else if (bk > 35 && bk < 45){
    bk_desc = bk - (bk * 0.1)
    console.log('Desconto de 10%. Valor com desconto: ' + bk_desc)
} else if (bk > 45){
    bk_desc = bk - (bk * 0.15)
    console.log('Desconto de 15%. Valor com desconto: ' + bk_desc)
}
