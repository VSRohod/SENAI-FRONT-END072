function procedimento(){
    let nome = prompt("Seja bem vindo(a), qual é o seu nome?")
    // alert(nome+" coloque o primeiro número a ser somado")
    let n1 = Number(prompt(`${nome} coloque o primeiro numero a ser somado`))
    let n2 = parseInt(prompt(`${nome} coloque o segundo numero a ser somado`))

    // Number(), parseInt(), parseFloat() - converte string para numero
    let resultado = n1 + n2

    alert(`A soma dos números é de ${resultado}`)
}