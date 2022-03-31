//codigo uso call para entender como funciona o 'this', criando essa função posso ter
//mais classes com o mesmo atributo mas valores diferente, para que quando vc for chamar
//usa o 'this' para especificar de qual estrutura estamos falando
// const pessoa = {
//     nome: 'Neto',
// };

// const animal = {
//     nome: 'Murphy',
// };

// function getSomenthing() {
//     console.log(this.nome);
// }

// getSomenthing.call(pessoa);

{
    const myObj = {
        num: 2,
        num2: 4,
    };

    function soma(a, b) {
        console.log(this.num + this.num2 + a + b);
    }
    soma.apply(myObj, [1, 5]);
    //12
}