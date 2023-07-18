var idade = 17 //Condição ANINHADA
console.log(`Você tem ${idade} anos.`)
if(idade < 16){
    console.log("Não vota")
}else if(idade >= 16 || idade >= 65){ //&& = AND/e || = OR/ou
    console.log("Voto opcional")
}else{
    console.log("Voto obrigatório")
}