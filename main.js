function tocaSomCoin () {
    document.querySelector('#som__coin').play();
}

function tocaSomDenied () {
    document.querySelector('#som__denied').play();
}

let contador = 0
const listaNitos = document.querySelectorAll('.nitos');
const listaCash = document.querySelectorAll('.cash');

while (contador < listaCash.length) {
    listaCash[contador].onclick = tocaSomCoin;
    listaNitos[contador].onclick = tocaSomDenied;

    contador = contador + 1
}

//000000000000000000000000//

// Obtém referências para o botão do menu móvel e o menu móvel
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

// Adiciona um ouvinte de evento para o botão do menu móvel
menuButton.addEventListener("click", () => {
    // Alterna a visibilidade do menu móvel ao clicar no botão
    if (mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden");
    } else {
        mobileMenu.classList.add("hidden");
    }
});
