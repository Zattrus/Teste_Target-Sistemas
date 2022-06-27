//Teste 2
/*Funcao fibonacci*/
function fibonacci(numero) {
    let sequencia = [0, 1];
    let proximo = 0;
    let i = 0;
    while (i < numero) {
        proximo = sequencia[i] + sequencia[i + 1];
        sequencia.push(proximo);
        i++;
    }
    if (sequencia.includes(numero)) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${numero} não pertence à sequência de Fibonacci.`;
    }
}

/*Usei o console.log para o retorno da funcao com passagem de parametro, que no caso seria um numero*/
console.log(fibonacci(0));
console.log(fibonacci(54));
console.log(fibonacci(21));
console.log(fibonacci(235));