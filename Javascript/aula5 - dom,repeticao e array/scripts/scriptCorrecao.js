// 1 - Faça uma listagem de 6 filmes de sua escolha com array e faça eles serem impressos no html

function ex1(){
    var filmes = ['Senhor do aneis','Star wars','Matrix','Dune','Dune2','Vingadores']

    filmes.forEach(cadaFilme => {
        document.querySelector("#respostaEx1").innerHTML += `
            <p> ${cadaFilme} </p>
        `
    });
}

// 2 - Fazer a tabuada com repetições recebendo os valores pelos inputs
/* PASSO 1
    - BUSCAR INPUT E RECEBER O VALOR

   PASSO 2
    - PEGAR O VALOR E MULTIPLICAR ATE 10

   PASSO 3
    - IMPRIMIR O RESULTADO NA DIV RESPOSTAEX2
*/
function ex2(){
    let numero = Number(document.querySelector("#inputEx2").value)

    // let contador = 0
    // while(contador <= 10){

    //     contador++
    // }
    if(numero == 0){
        document.querySelector("#respostaEx2").innerHTML = ``
    }else{
        for(let contador = 0;contador <= 10;contador++){
        
            let calculo = numero * contador
    
            document.getElementById("respostaEx2").innerHTML += `
                <p> ${numero} x ${contador} = ${calculo} </p>
            `
        }
    }

    
}