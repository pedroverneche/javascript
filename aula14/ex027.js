//5! = 5 x 4 x 3 x 2 x 1 

function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
        console.log(`5 x ${c} = ${fat}`)
    }
    return fat
}
console.log("Fatorial de 5 é igual",fatorial(5))