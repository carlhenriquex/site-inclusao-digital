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
descricao: "Graduanda em Administração pela Estácio. Possui formação técnica em Design de Interiores pela ETE Miguel Batista e cursou Gastronomia na UNINASSAU. Atua na área administrativa e de gestão, com experiência em Gestão de Risco, atendimento ao público e rotinas administrativas. Estudante do Curso Técnico em Administração pela ETEPAC. No projeto, atuou como ministrante das aulas no COMPAZ e contribuiu para o desenvolvimento das atividades práticas, sendo também responsável pela idealização e criação do vídeo institucional do projeto."
},
"Carlos Henrique": {
curso: "Design Gráfico",
descricao: "Estudante do curso Técnico em Design Gráfico pela ETEPAC. Atuou no projeto na elaboração de slides e ministração das aulas, sendo também responsável pela concepção e implementação do site institucional."
},
"Glébson Silva": {
curso: "Logística",
descricao: "Estudante do curso Técnico em Logística pela ETEPAC. Atuou no projeto na elaboração de slides e ministração das aulas, bem como na produção e revisão dos textos institucionais."
},
"Jaquelyne Alves": {
curso: "Tradução e Interpretação de Libras",
descricao: "Graduada em Enfermagem pela Universidade de Pernambuco. Estudante do Curso Técnico em Tradução e Interpretação de Libras pela ETEPAC. Atuou no projeto na elaboração de slides e ministração das aulas, bem como na organização e revisão de conteúdos para o site e na criação de materiais visuais para as redes sociais."
},
"Júlio Rasec": {
curso: "Desenvolvimento de Sistemas",
descricao: "Estudante do curso Técnico em Desenvolvimento de Sistemas pela ETEPAC. Atuou no projeto na elaboração de slides e ministração das aulas, e integrou a equipe responsável pelo desenvolvimento do site institucional."
},
"Leonardo Felipe": {
curso: "Logística",
descricao: "Graduado em História pela Universidade de Pernambuco – UPE, Campus Petrolina. Pós-graduado em Metodologia do Ensino de História. Foi bolsista do Programa Institucional de Bolsa de Iniciação à Docência (PIBID) pela UPE. Estudante do Curso Técnico em Logística pela ETEPAC. Atuou no projeto na elaboração e revisão de slides de aula, organização do calendário no Trello e acompanhamento dos prazos e andamento das atividades."
},
"Rayane Gomes": {
curso: "Desenvolvimento de Sistemas",
descricao: "Graduada em Engenharia Florestal pela Universidade Federal Rural de Pernambuco (UFRPE). Graduanda em Sistemas da Informação pela Unidade Acadêmica de Educação a Distância e Tecnologia da UFRPE e participante da formação em Análise de Dados em parceria com a Télos e a Thoughtworks. Estudante do Curso Técnico em Desenvolvimento de Sistemas pela ETEPAC. Atuou no projeto na ministração das aulas, elaboração de planos de aula, apresentações e materiais de apoio para os alunos, além de desenvolver a coleta, organização e análise dos dados dos participantes, produzindo gráficos e textos interpretativos que integraram o relatório final do projeto."
},
"Ruth Pereira": {
curso: "Logística",
descricao: "Graduanda em Letras - Português pela Universidade Federal de Pernambuco. Técnica em Administração pela ETE Advogado José David Gil Rodrigues e tecnóloga em Recursos Humanos pela UNIASSELVI. Possui experiência na área administrativa. Estudante do Curso Técnico em Logística pela ETEPAC. Atuou no projeto na elaboração de slides e ministração das aulas, bem como na produção e revisão dos textos institucionais."
},
"Valmir Silva": {
curso: "Desenvolvimento de Sistemas",
descricao: "Bacharel em Administração pelo Centro Universitário São Miguel e tecnólogo em Gestão de Logística pelo Instituto Brasileiro de Gestão e Marketing. Especialista em Bioética, com MBA em Gestão de Instituições Públicas, além de pós-graduações em Docência na Educação Profissional e Tecnológica e em Gestão Pública Municipal. Especializando em Gestão na Educação Profissional e em Saúde Digital no Sistema Único de Saúde. Possui mais de 20 anos de experiência em gestão administrativa, logística e liderança de equipes multidisciplinares. Atua como Tutor da Educação Profissional Polo/EAD na ETEPAC. Estudante do Curso Técnico em Desenvolvimento de Sistemas pela ETEPAC. Atuou no projeto na elaboração de slides e ministração das aulas, além de contribuir na criação e aprimoramento de materiais visuais para as redes sociais."
}
}

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