Algoritmo "AULAVETOR"

Var
//produto1, produto2, produto3 : caractere

// vetor simples - uma linha
produtos : vetor[1..3] de caractere

// matriz - linhas e colunas
matrizVetor : vetor[1..3,1..2] de inteiro

contador, contador2 : inteiro
Inicio
//produto1 <- "Alface"
//produto2 <- "Tomate"
//produto3 <- "cebola"

produtos[2] <- "Alface"

para contador de 1 ate 3 faca
   leia(produtos[contador])
fimPara

   limpaTela()
   escreval("----------Catalogo de produtos--------")
para contador2 de 1 ate 3 faca
   escreval("* ",produtos[contador2])
fimPara

//array
//escreval(produto1)



Fimalgoritmo