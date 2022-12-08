/* Precisamos deixar essa função mais flexível, ela deve aceitar qualquer quantidade de parâmetros e retornar a soma de todos os parâmetros.
const somaNumeros = (numero1, numero2) => { 
    return numero1 + numero2
}
 */

function somar (...numeros){
    return numeros.reduce((item, elemento) => item += elemento)
}

console.log(somar(1, 5, 6))