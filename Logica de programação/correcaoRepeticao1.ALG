Algoritmo "semnome"

Var
nMercadorias, contador : inteiro
valorMercadoria, valorTotal, mediaTotal : real

Inicio
//3) Uma loja est� levantando o valor total de todas
// as mercadorias em estoque.Escreva um algoritmo que
//permita a entrada das seguintes informa��es:

//a) o n�mero total de mercadorias no estoque;
//b) o valor de cada mercadoria. Ao final imprimir
//o valor total em estoque e a m�dia de valor das
//mercadorias.

// entrada - numero total de estoque, valor da mercadoria
// saida - valor total de estoque , media das mercadoria
// processo - somar os valores total e calcular a media

  escreval("Insira o numero total das mercadorias :")
  leia(nMercadorias)
  
  para contador de 1 ate nMercadorias faca
    escreval("Digite o valor da ",contador,"� mercadoria :")
    leia(valorMercadoria)
    valorTotal <- valorTotal + valorMercadoria
    limpaTela()
  fimPara
  
  mediaTotal <- valorTotal / nMercadorias
  
  escreval("--------VALORES--------")
  escreval("O valor total de estoque � de :",valorTotal)
  escreval("A m�dia dos produtos � de :",mediaTotal)

Fimalgoritmo