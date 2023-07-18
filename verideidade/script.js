function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    let img = document.getElementById("imagem")
    if(fano.value.length == 0 || fano.value > ano){
        window.alert("[ERRO] verifique os dados e tente novamente!")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        if(fsex[0].checked){
            genero = "Homem"
            if(idade > 20 && idade < 50){
                img.src = "foto-adulto-m.png"
            }else if(idade > 14){
                img.src = "foto-jovem-m.png"
            }else if(idade<14 && idade > 3){
                img.src = "menino.png"
            }else if(idade < 4){
                genero = "Bebê"
                img.src = "foto-bebe-m.png"
            }else{
                img.src = "foto-idoso-m.png"
            }
            res.innerHTML = `Detectamos um ${genero} de ${idade} anos.`
        }else if(fsex[1].checked){
            genero = "Mulher"
            if(idade > 20 && idade < 50){
                img.src = "foto-adulto-f.png"
            }else if(idade > 14){
                img.src = "foto-jovem-f.png"
            }else if(idade<14 && idade > 3){
                img.src = "menina.png"
            }else if(idade < 4){
                genero = "Bebê"
                img.src = "foto-bebe-f.png"
            }else{
                img.src = "foto-idoso-f.png"
            }
            res.innerHTML = `Detectamos uma ${genero} de ${idade} anos.`
        }
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}