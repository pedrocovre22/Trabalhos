let num = []

let n = 3
for (let i = 0; i < n; i++){
    console.log("Base:" + 2 + " expoente: " + (n-1))
    exponenciacao = 2** (n-i)
    num.push(exponenciacao)
}

console.log("vetor original", num)
for (let i = 0; i < n; i++){
    num[i] *= 2
}

console.log("vetor original", num)
