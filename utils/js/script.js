// === MUDAR ESTILO DA HEADER COM O SCROLL DA PÁGINA ===
window.addEventListener("scroll", function () {

let header = document.querySelector("#header")
header.classList.toggle("rolagem", window.scrollY > 500)
})

// === MENU HAMBURGUER PARA TELAS MENORES ===
function menuShow() {
const menuMobile = document.querySelector(".mobile-menu");
menuMobile.classList.toggle("open");

if (menuMobile.classList.contains("open")) {
const menuItems = menuMobile.querySelectorAll(".item-mobile");
menuItems.forEach(item => {
item.addEventListener("click", () => {
    menuMobile.classList.remove("open");
} );
} );
}
}

// === ===
const equipeFotos = document.querySelector(".equipe-fotos");
const fotos = document.querySelectorAll(".foto-container");
const setaEsquerda = document.querySelector(".seta.esquerda");
const setaDireita = document.querySelector(".seta.direita");

let indiceAtual = 3;
const total = fotos.length;

// Atualiza o destaque e a posição do carrossel
function atualizarCarrossel() {
  fotos.forEach((f, i) => f.classList.remove("destaque"));
  fotos[indiceAtual].classList.add("destaque");

  // Calcula deslocamento para centralizar a imagem destaque
    const gap = parseFloat(getComputedStyle(equipeFotos).gap) || 0;
    const deslocamento = -indiceAtual * (fotos[0].offsetWidth + gap) + (equipeFotos.offsetWidth / 2 - 15) - (fotos[0].offsetWidth / 2);
    equipeFotos.style.transform = `translateX(${deslocamento}px)`;
}

// Botões
setaEsquerda.addEventListener("click", () => {
  indiceAtual = (indiceAtual - 1 + total) % total;
  atualizarCarrossel();
});

setaDireita.addEventListener("click", () => {
  indiceAtual = (indiceAtual + 1) % total;
  atualizarCarrossel();
});

// Inicia
atualizarCarrossel();
window.addEventListener("resize", atualizarCarrossel);


// === ===

