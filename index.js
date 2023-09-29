/*
Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal 

1- Criar função passando parâmetros de vitórias e derrotas
2- Dentro dessa função, declarar uma variável saldo (vitória - derrota) e retornar o resultado
3- Criar condição (if, switch, etc) usando o valor do saldo como comparação
4- Final: retonar uma mensagem: "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/
let saldoVitorias = calcularSaldo(10,6)
const menssagem = "O Herói tem saldo de " + saldoVitorias + "vitórias, e está no nível "

if (saldoVitorias < 10) {
    nivel = "Ferro"
    console.log (menssagem + nivel)
} else if ((saldoVitorias >=11) && (saldosVitorias <=20)) {
    nivel = "Bronze"
    console.log (menssagem + nivel) 
} else if ((saldoVitorias >=21) && (saldosVitorias <=50)) {
    nivel = "Prata"
    console.log (menssagem + nivel)
} else if ((saldoVitorias >=51) && (saldosVitorias <=80)) {
    nivel = "Ouro"
    console.log (menssagem + nivel)
} else if ((saldoVitorias >=81) && (saldosVitorias <=90)) {
    nivel = "Diamante"
    console.log (menssagem + nivel)
} else if ((saldoVitorias >=91) && (saldosVitorias <=100)) {
    nivel = "Lendário"
    console.log (menssagem + nivel)
} else {
    nivel = "Imortal"
    console.log (menssagem + nivel)
}

function calcularSaldo(vitorias, derrotas) {
    let saldo = (vitorias - derrotas)
    return saldo
}
