class Pacote{
    constructor(srcImg,local,descricao,preco,pacotes){
        this.srcImg = srcImg;
        this.local = local;
        this.descricao = descricao;
        this.preco = preco;
        this.pacotes = pacotes;
    }
}

var todosPacotes = []
todosPacotes.push(new Pacote("https://www.viagenscinematograficas.com.br/wp-content/uploads/2020/05/10-Melhores-Praias-do-Nordeste-Brasileiro-Capa-990x557.jpg","Nordeste","Melhor comida brasileira!",350,["Pacote 3 dias","Pacote 5 dias"]))

todosPacotes.forEach(cadaPacote => {
    document.getElementById("catalogo").innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${cadaPacote.srcImg}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${cadaPacote.local}</h5>
                <p class="card-text">${cadaPacote.descricao}</p>
                <p class="card-text">${cadaPacote.preco}</p>
                <p class="card-text">${cadaPacote.pacotes}</p>
                <a href="#" class="btn btn-primary">COMPRAR PACOTE</a>
            </div>
        </div>
    `
});