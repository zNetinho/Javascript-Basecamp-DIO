function validaArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError('Envie os parametros');

        if (typeof arr !== 'object') throw new TypeError("Erro array precisa ser do tipo Objeto");

        if (typeof num !== 'number') throw new TypeError('Array precisa de numeros');

        if (arr.length !== num) throw new RangeError("tamanho invalido");
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este e um erro de ReferenceError")
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log("Este e um erro de ReferenceError")
            console.log(e.message)
        } else if (e instanceof ReferenceError) {
            console.log("Este e um erro de ReferenceError")
            console.log(e.message)
        } else {
            console.log("Tipo de erro não declarado:" + e)
        }
    }
}
console.log(validaArray());
console.log(validaArray([], 1));
console.log(validaArray([1, 2, 3, 4, 5, ], 6))