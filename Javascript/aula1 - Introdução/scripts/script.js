function explicacao(){
    // Comando para retornar um valor no console
    console.log("Hello World");

    // cria uma variavel com seu respectivo nome
    var teste 

    // = é atribuição
    // teste = "Fazendo teste"

    // alert - retorna uma mensagem
    alert("Estou vivo!");

    // prompt - retorna uma mensagem com um input, e seu retorno é de string(caractere)
    //teste = prompt("Qual é o seu nome: ");

    // confirm - retorna uma mensagem, e seu retorno é de valor boolean(lógico)
    // teste = confirm("Deseja receber notificações?");

    // variavel tipo Number
    // teste = 100

    // variavel tipo Object
    // teste = []

    // typeOf() = verifica o tipo da variavel
    console.log(typeof(teste))

    // TIPOS DE VARIAVEL
    // escopo global e sobrescrevivel
    var nome = "Victor"
    // escopo local e sobrescrevivel (temporaria)
    function teste(){
        let sobrenome = "Santos"
        console.log(sobrenome);
    }
    // escopo global mas não sobrescrevivel!
    const numero = 100;
}

