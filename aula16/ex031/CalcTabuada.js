function CalcTabuada() {
    var num = parseInt(document.getElementById("numero").value);
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    tabela.innerHTML = "";

    for (var i = 1; i <= 10; i++) {
        var operacao = num + " x " + i;
        var resultado = num * i;

        var linha = tabela.insertRow();
        var coluna1 = linha.insertCell(0);
        var coluna2 = linha.insertCell(1);

        coluna1.textContent = operacao;
        coluna2.textContent = resultado;
    }
}
