const cadastrarBtn = document.getElementById("cadastrar");

cadastrarBtn.addEventListener('click', cadastrar);

function cadastrar(){
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    localStorage.setItem('email',email)
    localStorage.setItem('senha',senha)
    
}