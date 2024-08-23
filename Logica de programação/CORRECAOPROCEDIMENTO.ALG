Algoritmo "correcaoProcedimento"

Var
totalEleitores: inteiro

//exercicio1
procedimento contabilizarPercVotos()
var
  votoValido,votoNulo,votoBranco : inteiro
  percValido, percNulo, percBranco : real
inicio
  escreval("Quantidade de votos em branco: ")
  leia(votoBranco)
  escreval("Quantidade de votos nulos: ")
  leia(votoNulo)
  escreval("Quantidade de votos válidos: ")
  leia(votoValido)
  
  totalEleitores <- votoBranco + votoNulo + votoValido

  percBranco <- votoBranco * 100 / totalEleitores
  percNulo <- votoNulo * 100 / totalEleitores
  percValido <- votoValido * 100 / totalEleitores

  limpaTela()
  escreval("Numero total de eleitores : ",totalEleitores)
  escreval("O percentual de votos em branco: ",percBranco:2:2, " %")
  escreval("O percentual de votos nulos: ",percNulo:2:2, " %")
  escreval("O percentual de votos válidos: ",percValido:2:2, " %")
fimProcedimento
//fimExercicio1

//exercicio2
  procedimento media()
   var
     nota1, nota2, nota3, mediaFinal : real
   inicio
     escreval("Escreva a primeira nota")
     leia(nota1)
     escreval("Escreva a segunda nota")
     leia(nota2)
     escreval("Escreva a terceira nota")
     leia(nota3)
     
     mediaFinal <- (nota1 * 2 + nota2 * 3 + nota3 * 5)/10
     
     escreval(mediaFinal)
     
  fimProcedimento
//fimExercicio2

Inicio
//contabilizarPercVotos()
media()
Fimalgoritmo