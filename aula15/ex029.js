//Orientação a objetos

let amigo = {nome:'Pedro',
sexo: 'M',
peso: 83.4,
engordar(p=0){
    this.peso += p
}}

console.log(`Seu amigo ${amigo.nome}  em novembro pesava ${amigo.peso}Kg`)
amigo.engordar(2)
console.log(`Agora ele pesa ${amigo.peso}Kg.`)