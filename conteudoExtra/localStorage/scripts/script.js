const listarBtn = document.getElementById("listar");
const deletarBtn = document.getElementById("deletar");
const resetarBtn = document.getElementById("resetar");

listarBtn.addEventListener('click', listar);
deletarBtn.addEventListener('click', deletar);
resetarBtn.addEventListener('click', resetar);

function listar(){
    document.querySelector('#listarEmail').innerHTML = `
        ${localStorage.getItem('email')}
    `
}

function deletar(){
    localStorage.removeItem('email')
}

function resetar(){
    localStorage.clear()
}

