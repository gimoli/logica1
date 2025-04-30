//function mediaDaNota(nota0, nota1, nota2, nota3){

//const = tipo de variavel, é imutável
//mediaFinal = nome da variável em camelcase
//o que ela faz?
//soma das variáveis e dividide pela quantidade de variáveis

//const mediaFinal = (nota0 + nota1 + nota2 + nota3) / 4

//if = condição
//(mediaFinal >=7) = a condição ta verificando se a variavel 'mediaFinal' é maior ou igual a 7

//else= se nâo atender a nenhuma condição anterior ela entra no else
//return= informe a resposta final

//if (mediaFinal >=7) {
//        return "Aprovado"
//    } else {
//        return "Reprovado"
//    }

//return mediaFinal >=7 ? "Aprovado" : "Reprovado";

//}

//const nota0 = Number(prompt("Digite uma nota"));
//const nota1 = Number(prompt("Digite a segunda"));
//const nota2 = Number(prompt("Digite a terceira nota"));
//const nota3 = Number(prompt("Digite a quarta nota"));

//document.write(mediaDaNota(nota0, nota1, nota2, nota3));



function classificacao() {
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);
    const resultadoFinal = document.getElementById("resultadoFinal");
    let aprovacao;

    const media = (nota1 + nota2 + nota3)/3;
    if (nota1 > 10 || nota2 > 10 || nota3 > 10 || nota1 < 0 || nota2 < 0 || nota3 < 0
        || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Digite uma nota válida!");
    } else {
        aprovacao = media > 7 ? "Aprovado!" : "Reprovado.";
        resultadoFinal.innerHTML = `A sua media foi de ${media.toFixed(2)}. ${aprovacao}`;
    }
}


function tabuada() {
    const tabuadaInput = Number(document.getElementById("tabuada-input").value);
    let i = 1;
    let resultado = [];

    while(i <= 10) {
        resultado += tabuadaInput * i;
        i++;
    }

    for(let i = 1; i <= 10; i++) {
        resultado += tabuadaInput * i;
    }
}


function