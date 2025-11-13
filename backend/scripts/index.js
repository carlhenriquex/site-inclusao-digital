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

const equipeFotos = document.querySelector(".equipe-fotos");
const fotos = document.querySelectorAll(".foto-container");
const setaEsquerda = document.querySelector(".seta.esquerda");
const setaDireita = document.querySelector(".seta.direita");

let indiceAtual = 0;
const total = fotos.length;

// Atualiza o destaque e a posição do carrossel
function atualizarCarrossel() {
  fotos.forEach((f, i) => f.classList.remove("destaque"));
  fotos[indiceAtual].classList.add("destaque");

  // Calcula deslocamento para centralizar a imagem destaque
    const gap = parseFloat(getComputedStyle(equipeFotos).gap) || 0;
    const deslocamento = -indiceAtual * (fotos[0].offsetWidth + gap) + (equipeFotos.offsetWidth / 2) - (fotos[0].offsetWidth / 2);
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


// === ABRIR E FECHAR CARDS DOS BOLSISTAS ===

// dados de cada modal
const infos = {
"Andryene Rodrigues": {
descricao: "Graduanda em <b>Administração</b> pela Estácio. Possui formação técnica em <b>Design de Interiores</b> pela ETE Miguel Batista e cursou <b>Gastronomia</b> na UNINASSAU. Atua na área administrativa e de gestão, com experiência em Gestão de Risco, atendimento ao público e rotinas administrativas. Estudante do Curso Técnico em <b>Administração</b> pela ETEPAC.<br> No projeto, atuou como ministrante das aulas no COMPAZ e contribuiu para o desenvolvimento das atividades práticas, sendo também responsável pela <b>idealização e criação do vídeo institucional</b> do projeto."
},
"Carlos Henrique": {
descricao: "Estudante do curso Técnico em <b>Design Gráfico</b> pela ETEPAC.<br> Atuou no projeto na elaboração de slides e ministração das aulas, sendo também responsável pela <b>concepção e implementação do site institucional</b>."
},
"Glébson Silva": {
descricao: "Estudante do curso Técnico em <b>Logística</b> pela ETEPAC.<br> Atuou no projeto na elaboração de slides e ministração das aulas, bem como na <b>produção e revisão dos textos institucionais</b>."
},
"Jaquelyne Alves": {
descricao: "Graduada em <b>Enfermagem</b> pela Universidade de Pernambuco. Estudante do Curso Técnico em <b>Tradução e Interpretação de LIBRAS</b> pela ETEPAC.<br> Atuou no projeto na elaboração de slides e ministração das aulas, bem como na <b>organização e revisão de conteúdos para o site</b> e na <b>criação de materiais visuais para as redes sociais</b>."
},
"Júlio Rasec": {
descricao: "Estudante do curso Técnico em <b>Desenvolvimento de Sistemas</b> pela ETEPAC.<br> Atuou no projeto na elaboração de slides e ministração das aulas, e <b>integrou a equipe responsável pelo desenvolvimento do site institucional</b>."
},
"Leonardo Felipe": {
descricao: "Graduado em <b>História</b> pela Universidade de Pernambuco – UPE, Campus Petrolina. Pós-graduado em <b>Metodologia do Ensino de História</b>. Foi bolsista do Programa Institucional de Bolsa de Iniciação à Docência (PIBID) pela UPE. Estudante do Curso Técnico em <b>Logística</b> pela ETEPAC.<br> Atuou no projeto na elaboração e revisão de slides de aula, <b>organização do calendário</b> no Trello e <b>acompanhamento dos prazos e andamento das atividades</b>."
},
"Rayane Gomes": {
descricao: "Graduada em <b>Engenharia Florestal</b> pela Universidade Federal Rural de Pernambuco (UFRPE). Graduanda em <b>Sistemas da Informação</b> pela Unidade Acadêmica de Educação a Distância e Tecnologia da UFRPE e participante da formação em <b>Análise de Dados</b> em parceria com a Télos e a Thoughtworks. Estudante do Curso Técnico em <b>Desenvolvimento de Sistemas</b> pela ETEPAC.<br> Atuou no projeto na ministração das aulas, elaboração de planos de aula, apresentações e materiais de apoio para os alunos, além de desenvolver a <b>coleta, organização e análise dos dados dos participantes</b>, produzindo gráficos e textos interpretativos que integraram o relatório final do projeto."
},
"Ruth Pereira": {
descricao: "Graduanda em <b>Letras - Português</b> pela Universidade Federal de Pernambuco. Técnica em <b>Administração</b> pela ETE Advogado José David Gil Rodrigues e tecnóloga em <b>Recursos Humanos</b> pela UNIASSELVI. Possui experiência na área administrativa. Estudante do Curso Técnico em <b>Logística</b> pela ETEPAC.<br> Atuou no projeto na elaboração de slides e ministração das aulas, bem como na <b>produção e revisão dos textos institucionais</b>."
},
"Valmir Silva": {
descricao: "Bacharel em <b>Administração</b> pelo Centro Universitário São Miguel e tecnólogo em <b>Gestão de Logística</b> pelo Instituto Brasileiro de Gestão e Marketing. Especialista em <b>Bioética</b>, com MBA em <b>Gestão de Instituições Públicas</b>, além de pós-graduações em <b>Docência na Educação Profissional e Tecnológica</b> e em <b>Gestão Pública Municipal</b>. Especializando em </b>Gestão na Educação Profissional</b> e em <b>Saúde Digital no Sistema Único de Saúde</b>. Possui mais de 20 anos de experiência em gestão administrativa, logística e liderança de equipes multidisciplinares. Atua como Tutor da Educação Profissional Polo/EAD na ETEPAC. Estudante do Curso Técnico em <b>Desenvolvimento de Sistemas</b> pela ETEPAC.<br> Atuou no projeto na elaboração de slides e ministração das aulas, além de contribuir na <b>criação e aprimoramento de materiais visuais para as redes sociais</b>."
}
}
