class Carro{
    constructor(marca,modelo,ano,cor,velMax){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.velMax = velMax;
        this.velMin = 0;
        // this.acelerar = function(){}
    }
    acelerar(){
        let acelerarInput = Number(document.querySelector("#acelerarInput").value)

        if(acelerarInput <= carro.velMax){
            carro.velMin = acelerarInput
            alert("O carro acelerou!")
            mostrarCarro()
        }else{
            alert("Velocidade maxima ultrapassada!")
            carro.velMin = carro.velMax
            mostrarCarro()
        }
    }
}

var carro = null
document.querySelector("#cadastrarBtn").addEventListener('click',cadastrar)

function mostrarCarro(){
    document.querySelector("#resultado").innerHTML = `
        <div class="container" >
            <p> ${carro.marca} </p> 
            <p> ${carro.modelo} </p> 
            <p> ${carro.ano} </p> 
            <p> ${carro.cor} </p> 
            <p> ${carro.velMax} </p>
            <p> ${carro.velMin} </p>
            <input id="acelerarInput" type="number">
            <button id="acelerarBtn" type="button">ACELERAR</button> 
        </div>
    `
    document.querySelector("#acelerarBtn").addEventListener("click",carro.acelerar)
}

function cadastrar(){
    let marca = document.querySelector("#marca").value;
    let modelo = document.querySelector("#modelo").value;
    let ano = document.querySelector("#ano").value;
    let cor = document.querySelector("#cor").value;
    let velMax = Number(document.querySelector("#velMax").value);

    carro = new Carro(marca,modelo,ano,cor,velMax)

    mostrarCarro()
}