// APARECER E DESAPARECER SCROLL

let lastScroll = 0;
const headerPerfis = document.getElementById("header-perfis");

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
        // DESCENDO - esconder o header
        headerPerfis.classList.add("hide");
    } else {
        // SUBINDO - mostrar o header
        headerPerfis.classList.remove("hide");
    }

    lastScroll = currentScroll;
});