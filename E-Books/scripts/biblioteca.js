var livros = [
    ['../images/livros/harry potter.jpg','Harry Potter','Em "Harry Potter e as Relíquias da Morte", Harry, Ron e Hermione estão determinados a descobrir e destruir os Horcruxes de Voldemort. Sozinhos e fugitivos, eles enfrentam as Forças das Trevas enquanto buscam pistas sobre as Relíquias da Morte, uma lenda antiga que poderia dar a Voldemort o poder que ele tanto busca'],
    ['../images/livros/girlRed.jpg','Girl Red','There is more value in a story than one can really understand before they hear it. Having only even known the feeling of fear there has been one thing that Rachel has held on to in the darkest of nights; the hope of finding someone that was once lost to her. Following the same rocky path that her brother took before her she flees her fate and runs to the city that promises answers to the questions she is yet to be sure of. It is only when she walks in the footsteps of her brother that she realizes there is more to life than the bleak existence she had known for twenty one years. Through the dying storm she finds what she least expected and uncovers a story that would stay with her for a lifetime.'],
    ['../images/livros/pijamalistrado.jpg','Pijama Listrado','lorem'],
    ['../images/livros/therestlessdark.jpg','The rest in the dark','lorem'],
    ['../images/livros/divergente.jpg','Divergente','lorem'],
    ['../images/livros/harry potter.jpg','Harry Potter','Harry retorna para seu quarto ano na Escola de Magia e Bruxaria de Hogwarts, junto com os seus amigos Ron e Hermione. Desta vez, acontece um torneio entre as três maiores escola de magia, com um participante selecionado de cada escola, pelo Cálice de Fogo. O nome de Harry aparece, mesmo não tendo se inscrito, e ele precisa competir.']
]

function atualizarBiblioteca(){
    document.querySelector("#bibliotecaLivros").innerHTML = ``
    livros.forEach(cadaLivro => {
        document.querySelector("#bibliotecaLivros").innerHTML += `
            <div class="books">
                <img src="${cadaLivro[0]}" alt="" class="booksImg">
                <div class="booksDesc">
                    <h2 class="booksName">${cadaLivro[1]}</h2>
                        <p class="booksSinopse">
                            ${cadaLivro[2]}
                        </p>
                </div>
            </div>
        `
    });
}

function manipularLivros(){
    // push adiciona ultimo elemento
    livros.push(["#","Game Of Thrones","lorem"])
    // unshift adidiona primeiro
    livros.unshift(["#","Independence Day","lorem"])
    // pop deleta ultimo
    livros.pop()
    // shift deleta primeiro
    livros.shift()

    // splice com terceiro atributo - substituimos o valor
    livros.splice(1,1,["#","Indepedence day","lorem"])
    // splice com terceiro , 0 no delete - adicionamos um valor
    livros.splice(1,0,["#","Vingadores","lorem"])
    // splice sem terceiro atributo - deletamos o valor
    livros.splice(2,1)
}

manipularLivros()
atualizarBiblioteca()