{
    function calcularIdade(anos) {
        return `Daqui a ${anos} anos, a ${this.nome} tera ${
            this.idade + anos
        } anos de idade. `;

    }
}
const pessoa1 = {
    nome: 'Maria',
    idade: 30
}
const pessoa2 = {
    nome: 'Marinez',
    idade: 31
}
const animal = {
    nome: 'Fiona',
    idade: 5,
    raca: 'pug'
};
console.log(calcularIdade.call(pessoa1, 12))
console.log(calcularIdade.apply(pessoa2, [4]))