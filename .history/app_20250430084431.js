function mediaDaNota(nota0, nota1, nota2, nota3){

//const = tipo de variavel, é imutável
//mediaFinal = nome da variável em camelcase
//o que ela faz?
//soma das variáveis e dividide pela quantidade de variáveis

const mediaFinal = (nota0 + nota1 + nota2 + nota3) / 4

//if = condição
//(mediaFinal >=7) = a condição ta verificando se a variavel 'mediaFinal' é maior ou igual a 7

//else= se nâo atender a nenhuma condição anterior ela entra no else
//return= informe a resposta final

if (mediaFinal >=7) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }

//return mediaFinal >=7 ? "Aprovado" : "Reprovado";
}

const nota0 = Number(prompt("Digite uma nota"));
const nota1 = Number(prompt("Digite a segunda"));
const nota2 = Number(prompt("Digite a terceira nota"));
const nota3 = Number(prompt("Digite a quarta nota"));

document.write(mediaDaNota(nota0, nota1, nota2, nota3));




function classificacao(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3)/3;
}