//sem arrow function
{
    const helloWorld = function() {
        return "Hello World"
    }
}
//Arrow Function
{
    const helloWorld = () => {
        return "Hello World"
    }
}
//jeito simples
{
    const helloWorld = () => "Hello World";
}
//arrow function não faz hoisting
{
    soma(2, 4)
    const soma = (a, b) => a + b;
}
//