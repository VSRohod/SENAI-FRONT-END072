function procedimento(){
    let nome = prompt("Seja bem vindo(a), qual é o seu nome?")
    // alert(nome+" coloque o primeiro número a ser somado")
    let n1 = Number(prompt(`${nome} coloque o primeiro numero a ser somado`))
    let n2 = parseInt(prompt(`${nome} coloque o segundo numero a ser somado`))

    // Number(), parseInt(), parseFloat() - converte string para numero
    let resultado = n1 + n2

    alert(`A soma dos números é de ${resultado}`)
}

// atividades
// 1-calcule conta, faça uma aplicação js que pegue o número de clientes em uma mesa, o valor total da conta e após isso divida a conta de forma igual a todos os clientes
// input = nClientes, vTotal
// output = resultadoDaConta
function ex1Correcao(){
    let nClientes = Number(prompt("Numero de clientes:"))
    let vTotal = Number(prompt("Valor total da mesa R$:"))

    let resultadoDaConta = vTotal / nClientes

    alert(`O valor para cada cliente é de : ${resultadoDaConta}`)
}

// 2-Sucessor e antecessor, faça uma aplicação que colete um número digitado pelo usuário e logo em seguida mostre em ordem: o numero anterior a ele, o próprio número escolhido e o número sucessor a ele
// input = numero
// output = sucessor, antecessor, numero
function ex2Correcao(){
    let numero = Number(prompt("Digite um numero"))

    alert(`O antecessor é ${numero - 1}, o próprio numero é ${numero} e o sucessor é ${numero + 1}`)
}