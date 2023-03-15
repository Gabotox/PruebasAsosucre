

//Mostrar y ocultar elementos de la tabla
let ocultados = document.querySelectorAll(".desaparecer");
let mostrarMas = document.querySelector(".mostrarMas");
let ocultar = document.querySelector(".ocultar");

ocultados.forEach(element => {
    mostrarMas.addEventListener("click", aparecer);
    function aparecer() {
        element.className = "";
        mostrarMas.style.display = "none";
        ocultar.style.display = "block";
    }
    ocultar.addEventListener("click", desaparecer);
    function desaparecer() {
        ocultar.addEventListener("click", desaparecer);
        element.className = "desaparecer";
        ocultar.style.display = "none";
        mostrarMas.style.display = "block";
    }
});
//Slider de número de jornadas
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 12,
    spaceBetween: 20,
    loop: true,
    fade: "true",
    grabCursor: "true",

    autoplay: {
        delay: 5000, // Tiempo de espera entre cada slide
        disableOnInteraction: false, // No detener la reproducción cuando el usuario interactúa con el slide
    },
});


//Slider de partidos
let swiperSegundo = new Swiper(".mySwiperSegundo", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    fade: "true",
    grabCursor: "true",

    autoplay: {
        delay: 3000, // Tiempo de espera entre cada slide
        disableOnInteraction: false, // No detener la reproducción cuando el usuario interactúa con el slide
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: "#botonesArriba",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
});