Algoritmo "semnome"

Var


procedimento ex1()
var
   contador,numero, soma : inteiro
inicio
   repita
      leia(numero)
      soma <- soma + numero
      contador <- contador + 1
   ate(contador > 10)
   

   escreval(soma)

fimProcedimento

procedimento ex2()
   var
      contador,qntNumeros,numero,maior : inteiro
   inicio
      escreval("Digite a qnt de numeros a serem testados")
      escreval("Ao final mostraremos o maior")
      leia(qntNumeros)
      
      repita
         leia(numero)
         
         se(numero > maior)entao
           maior <- numero
         fimSe
         
         contador <- contador + 1
      ate(contador >= qntNumeros)
      escreval("O maior numero é ",maior)
fimProcedimento

procedimento ex3()
   var
     contador : inteiro

   inicio
     repita
       se(contador % 10 = 0)entao
          escreval(contador," é multiplo de 10")
       senao
          escreval(contador)
       fimSe

       contador <- contador + 1
     ate(contador > 100)

fimProcedimento

Inicio
ex2()

Fimalgoritmo