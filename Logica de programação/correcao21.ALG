Algoritmo "semnome"

Var
ultimoNumero : inteiro

procedimento ex1()
   var
      nomeProdutos :vetor[1..3] de caractere
      valoresProdutos :vetor[1..3] de real
      contador : inteiro
   inicio
      para contador de 1 ate 3 faca
        escreval("Digite o nome do produto :")
        leia(nomeProdutos[contador])
        escreval("Digite o valor do(a)",nomeProdutos[contador])
        leia(valoresProdutos[contador])
        limpaTela()
      fimPara
      
      contador <- 0
      escreval("***PRODUTOS CADASTRADOS***")
      para contador de 1 ate 3 faca
         escreva(contador," - ",nomeProdutos[contador])
         escreval(" : R$ ",valoresProdutos[contador])
      fimPara
   
fimProcedimento

procedimento ex2()
  var
    contador: inteiro
    numeros : vetor[1..10] de inteiro
  inicio
    escreval("---Digite 10 números---")
    para contador de 1 ate 10 faca
      leia(numeros[contador])
    fimPara
    
    escreval("---10 números inversos---")
    para contador de 10 ate 1 passo -1 faca
      escreval(numeros[contador])
    fimPara
    
    ultimoNumero <- numeros[10]
fimProcedimento

Inicio
ex1()

Fimalgoritmo