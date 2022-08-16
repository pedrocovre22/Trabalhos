function plus (a,b){
    return a + b
}
console.log(plus(30,40))

const plusTwo = function(a = 30,b = 20,c = 100){
    if (c != NaN) return a+b
    else return a+b+c

}

console.log(PlusTwo(b=80))

const plusThree = (x=50,y=80) => {
    return x + y
}

console.log(plusThree(y=20,x=70))

bk=46,46
console.log('BK:' +bk)

if (bk <= 35){
    bk_desk = bk - (bk * 0.05)
    console.log('Descount of 5%' + bk_desk)
} else if (bk > 35 && bk < 45){
    bk_desk = bk - (bk * 0.1)
    console.log('Descount of 10%' + bk_desk)
} else if (bk >= 45){
    bk_desk = bk - (bk * 0.15)
    console.log('Descount of 15%' + bk_desk)
}
