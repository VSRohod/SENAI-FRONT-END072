Algoritmo "correcao"

Var
nota : real
aluno : caractere

//procedimento salvar
procedimento salvarNota()
   Inicio
   escreval("Digite a nota de ",aluno," :")
   leia(nota)
   escreval("Processo efetuado com sucesso!")
   escreval("A nota do aluno(a) ",aluno," foi salva")
   escreval("Nota: ",nota)
fimProcedimento
//fim procedimento salvar

Inicio
escreval("SELECIONE UM ALUNO PARA ATRIBUIR NOTA")
escreval("------------")
escreval("A) JOÃO")
escreval("B) MARIA")
escreval("C) PEDRO")
escreval("------------")
leia(aluno)

//SE SENAO
//se(aluno = "A")entao
//   aluno <- "João"
//   salvarNota()
//senao
//   se(aluno = "B")entao
//     aluno <- "Maria"
//     salvarNota()
//   senao
//      se(aluno = "C")entao
//        aluno <- "Pedro"
//        salvarNota()
//      senao
//        escreval("Opção inválida")
//      fimSe
//   fimse
//fimSe


//ESCOLHA CASO
escolha(aluno)
  caso "A"
   aluno <- "João"
   salvarNota()
  caso "B"
   aluno <- "Maria"
   salvarNota()
  caso "C"
   aluno <- "Pedro"
   salvarNota()
  outrocaso
   escreval("Opção inválida")
fimEscolha



Fimalgoritmo