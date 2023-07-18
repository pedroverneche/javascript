var agora = new Date() //Condição ANINHADA
var hora = agora.getHours() //pega o horário exato do seu PC
console.log(`Agora são exatamente ${hora} horas.`)
if(hora < 12.30){
    console.log("Periodo: MANHÃ")
    console.log("Tenha um Bom Dia!")
}else if(hora <= 18){
    console.log("Periodo: TARDE")
    console.log("Tenha uma Boa Tarde!")
}else{
    console.log("Periodo: NOITE")
    console.log("Tenha uma Boa Noite!")
}
