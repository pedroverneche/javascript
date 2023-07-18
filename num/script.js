let vetor = []
let num = document.querySelector("input#txtnum") 
let lista = document.querySelector("select#listanum")
let res = document.querySelector("div#res")
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function add(){
    if(isNumero(num.value) && !inLista(num.value, vetor)){
        vetor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    }else{
        alert("Valor inválido ou já encontrado na lista!")
    }
}
function maiorEmenor(){
    let maior = [0]
    let menor = [0]
    for(i = 0; i < vetor.length; i++){
        if(vetor[i] > maior){
            maior = vetor[i]
        }if(vetor[i] < menor){
            menor = vetor[i]
        }
    }
    return [maior, menor]
}
function somando(){
    let soma = 0
    for(c = 0; c < vetor.length; c++){
        soma += vetor[c]
    }
    return [soma]
}
function mediaValor(){
    let soma = somando()[0]
    let media = soma / vetor.length
    return[media]
}
function analisar(){
    if(vetor.length == 0){
        alert("Adicione valores antes de finalizar!")
    }else{ 
        let [maior, menor] = maiorEmenor()
        let [soma] = somando()
        let [media] = mediaValor()
        res.innerHTML = `<br>Ao todo temos ${vetor.length} números cadastrados.<br>`
        res.innerHTML += `<br>O maior valor informado foi ${maior}.<br>` 
        res.innerHTML += `<br>O menor valor informado foi ${menor}.<br>` 
        res.innerHTML += `<br>Somando todos os valores, temos ${soma}.<br>`
        res.innerHTML += `<br>A média dos valores digitados é ${media}.<br>` 
    }
}

