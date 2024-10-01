var btnTema = document.getElementById("btnTema");

btnTema.addEventListener('click',trocarTema);

function trocarTema(){
    let body = document.querySelector('body');
    let btnTemaImg = document.querySelector("#btnTemaImg")

    // hasAtributes = verifica se tem atributo
    // getAtributes = recebe o valor do atributo
    // setAtributes = seta um novo atributo ou substitui
    if(body.getAttribute("data-bs-theme") == "dark"){
        body.setAttribute("data-bs-theme","light");
        btnTemaImg.setAttribute("src","images/icons/moon-stars-fill.svg")
        btnTema.classList.replace("btn-outline-light","btn-outline-dark")
    }else{
        body.setAttribute("data-bs-theme","dark");
        btnTemaImg.setAttribute("src","images/icons/sun-fill.svg")
        btnTema.classList.replace("btn-outline-dark","btn-outline-light")
    }
}