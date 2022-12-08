function somar (...numeros){
    return numeros.reduce((item, elemento) => item += elemento)
}

console.log(somar(1, 5, 6))