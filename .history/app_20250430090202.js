//



function classificacao(nota1, nota2, nota3) {
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);
    const resultadoFinal = document.getElementById("resultadoFinal");
    let aprovacao;
        
    const media = (nota1 + nota2 + nota3)/3;
    if (media > 7) {
        aprovacao = "Aprovado!";
    } else {
        aprovacao = "Reprovado!";
    }

    resultadoFinal.innerHTML = 'A sua media foi de ${media}. ${Aprovado}.'
}

classificacao(10, 9, 8)