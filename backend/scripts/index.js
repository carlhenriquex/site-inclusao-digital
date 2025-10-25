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
});
});
}
}

// === ABRIR E FECHAR CARDS DO SECTION INFO (PROJETO, PARCERIA, BOLSISTAS) ===
const cards = document.querySelectorAll('.info-card');
const img = document.getElementById('info-img');
cards.forEach(card => {
card.addEventListener('click', () => {
cards.forEach(c => c.classList.remove('active'));
card.classList.add('active');
img.src = `img/${card.id}.png`;
});
});

// === ABRIR E FECHAR CARDS DOS BOLSISTAS ===
const cards_ = document.querySelectorAll('.card');
const modal = document.getElementById('modal-bolsista');
const close = document.querySelector('.close');

const modalImg = document.getElementById('modal-img');
const modalNome = document.getElementById('modal-nome');
const modalCurso = document.getElementById('modal-curso');
const modalDescricao = document.getElementById('modal-descricao');

// dados de cada modal
const infos = {
"Andryene Rodrigues": {
curso: "Administração",
descricao: "Descrição em breve."
},
// ... adicione os outros nomes aqui
};


cards_.forEach(card => {
card.addEventListener('click', () => {
const nome = card.querySelector('h4').textContent;
const curso = card.querySelector('.card-content h3').textContent;
const imgSrc = card.querySelector('img').src;

modalImg.src = imgSrc;
modalNome.textContent = nome;
modalCurso.textContent = curso;
modalDescricao.textContent = infos[nome]?.descricao || "Descrição em breve.";


modal.style.display = 'flex';
});
});

// Fecha o modal no icon x
close.addEventListener('click', () => {
modal.style.display = 'none';
});

// Fecha o modal clicando fora
window.addEventListener('click', e => {
if (e.target === modal) modal.style.display = 'none';
});