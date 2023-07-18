let num = [4,2,1]
num[3] = 3 //ele cria um espaço na posição 3 na variavel num e add o valor 3
num.push(5)  //ele cria um espaço na ultima posição e add o valor 5
num.length //atributo que mostra o numero de elementos de um vetor
//num.sort((a, b) => a - b)) organiza os valores em ordem crescente
console.log(`O vetor é [${num}]`)
console.log(`O vetor em ordem crescente [${num.sort((a, b) => a - b)}]`)
console.log(`Número de elementos do vetor: ${num.length}`)
let pos = num.indexOf(8)
if(pos == -1) {
    console.log(`O valor 8 não foi encontrado`)
}else{
    console.log(`O valor 4 está na posicção ${pos}`)
}