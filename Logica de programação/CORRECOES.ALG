Algoritmo "correcoes"

Var
idade : inteiro

// exercicio1
procedimento exercicio1()
  inicio

  escreval("Qual é a idade do nadador?")
  leia(idade)
  
  se(idade < 5)entao
    escreval("Idade Inválida ou não se encaixa com categorias")
  senao
    se(idade >= 5 )e (idade <= 7)entao
      escreval("Categoria infantil A")
    senao
      se(idade >= 8) e (idade <= 11)entao
        escreval("Categoria infantil B")
      senao
        se(idade >= 12) e (idade <= 13)entao
          escreval("categoria Juvenil A")
        senao
           se(idade >= 14) e (idade <= 17)entao
              escreval("Categoria Juvenil B")
           senao
             escreval("Categoria Adulto")
           fimse
        fimSe
      fimse
    fimSe
  fimSe
fimProcedimento
// fimexercicio1

//exercicio2
procedimento exercicio2()
   var
   nomeTime1,nomeTime2 : caractere
   qntGols1, qntGols2 : inteiro
   // var - variaveis globais e sobrescrevivel
   // let (dentro do procedimento) - local e sobrescrevivel
   // const - variavel global e não sobrescrevivel
   inicio

   escreval("Digite o nome do primeiro time:")
   leia(nomeTime1)
   escreval("Digite quantidade de gols do ",nomeTime1)
   leia(qntGols1)
   escreval("Digite o nome do segundo time:")
   leia(nomeTime2)
   escreval("Digite quantidade de gols do ",nomeTime2)
   leia(qntGols2)
   
   se(qntGols1 > qntGols2)entao
     escreval("O time ",nomeTime1, " ganhou")
   fimse
   
   se(qntGols1 < qntGols2)entao
     escreval("O time ",nomeTime2, " ganhou")
   fimSe
   
   se(qntGols1 = qntGols2)entao
     escreval("EMPATE")
   fimSe
   
   
   

fimProcedimento
//fimexercicio2

Inicio
leia(idade)

Fimalgoritmo