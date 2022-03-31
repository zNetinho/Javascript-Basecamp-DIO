function forInExemplo(obj) {
    for (prop in obj) {
        console.log(prop)
    }
}

const meuObjeto = {
    name: "Neto",
    age: "18",
    city: "Maringa"
}

forInExemplo(meuObjeto)
    //nome
    //idade
    //cidade

// for in
{
    function forInExemplo(obj) {
        for (prop in obj) {
            console.log(obj[prop]);
        }
    }
    const meuObjeto = {
        name: "Neto",
        age: "24",
        city: "Maringa"
    }
    forInExemplo(meuObjeto)
        // neto
        // 24
        // Maringá
}

//for of

{
    function logLetras(palavra) {
        for (letra of palavra) {
            console.log(letra);
        }
    }
    const palavra = "abacaxi";
    logLetras(palavra)
        //a
        //b
        //a
        //c
        //a
        //x
        //i
}

{
    function logLetras(nums) {
        for (num of nums) {
            console.log(letra);
        }
    }
    const nums = [30, 20, 40, 51, 97, 100]
    logLetras(nums)
        //30
        //20
        //40
        //51
        //97
        //100
}