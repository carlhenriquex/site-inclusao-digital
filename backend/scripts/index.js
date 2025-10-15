window.addEventListener("scroll", function () {

    let header = document.querySelector("#header")
    header.classList.toggle("rolagem", window.scrollY > 500)
})


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

const cards = document.querySelectorAll('.info-card');
const img = document.getElementById('info-img');

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    img.src = `img/${card.id}.png`;
  });
});