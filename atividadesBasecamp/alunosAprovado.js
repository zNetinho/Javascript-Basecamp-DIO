const alunos = [{
        nome: 'neto',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'bruno',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'paulo',
        nota: 6,
        turma: '2C'
    },
];

{
    function aprovados(arr, media) {
        let aprovados = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].nota >= media) {
                aprovados.push(arr[i].nome);
            }
        }
        return aprovados;
    }
    console.log(aprovados)
}
//usando o ObjectDestructuring
{
    function aprovados(arr, media) {
        let aprovados = [];
        for (let i = 0; i < arr.length; i++) {

            const { nota, nome } = arr[i];

            if (nota >= media) {
                aprovados.push(nome);
            }
        }
        return aprovados;
    }
}
console.log(aprovados(alunos, 5));