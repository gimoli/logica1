function mediaDaNota(nota0, nota1, nota2, nota3){

    const mediaFinal = (nota0 + nota1 + nota2 + nota3) / 4

    if (mediaFinal >=7) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}

const nota0 = Number(prompt("Digite a"));
const nota1 = Number(prompt("Digite a"));
const nota2 = Number(prompt("Digite a terceira nota"));
const nota3 = Number(prompt("Digite a terceira nota"));