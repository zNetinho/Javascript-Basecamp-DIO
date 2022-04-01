const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);
    // para transforma meu array em um set como value inves de um key pra cada valor
    // usa o "rest"
    return [...mySet];
}

console.log(valoresUnicos(meuArray));