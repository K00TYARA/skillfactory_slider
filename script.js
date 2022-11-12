// Создаем массив, хранящий данные слайдов
const slides = [
    {
        city: "Rostov-on-Don <br> LCD admiral",
        area: "81 m2",
        time: "3.5 months",
        img: "./images/image1.png"
    },
    {
        city: "Sochi Thieves",
        area: "105 m2",
        time: "4 months",
        img: "./images/image2.png"
    },
    {
        city: "Rostov-on-Don <br> Patriotic",
        area: "93 m2",
        time: "3 months",
        img: "./images/image3.png"
    }
]

// Функция инициализации слайдера
function initSlider() {

    // Создаем констакты для текста, который будет изменяться
    const city_text = document.querySelector(".city_text");
    const area_text = document.querySelector(".area_text");
    const time_text = document.querySelector(".time_text");

    // Константы для картинки, точек и заголовков над картинкой
    const sliderImages = document.querySelector(".images");
    const sliderDots = document.querySelector(".dots");
    const navTitles = document.querySelector(".nav_titles");

    // Константы для стрелок и переменная для нынешнего номера слайда
    const next = document.querySelector(".right_arrow");
    const prev = document.querySelector(".left_arrow");
    let slideNum = 0;

    // Инициализируем картинки
    slides.forEach((image, index) => {
            let imageDiv = `<img class="image n${index} ${index === 0 ? "active_img" : ""}" src="${slides[index].img}" data-index="${index}">`;
            sliderImages.innerHTML += imageDiv;
        })

    // Инициализируем точки
    slides.forEach((img, index) => {
        let dot = `<div class="slider_dot n${index} ${index === 0? "active_dot" : ""}" data-index="${index}"></div>`;
        sliderDots.innerHTML += dot;

        // Для переключения слайдов через точки
        sliderDots.querySelectorAll(".slider_dot").forEach(dot => {
            dot.addEventListener("click", function() {
                moveSlider(this.dataset.index);
            })
        })
    })

    // Для переключения слайдов через заголовки
    navTitles.querySelectorAll(".nav_title").forEach(title => {
        title.addEventListener("click", function() {
            moveSlider(this.dataset.index);
        })
    })

    // Смена слайда при клике на правую стрелку
    next.addEventListener("click", () => {
        if (slideNum === slides.length - 1) slideNum = -1;
        moveSlider(slideNum + 1);
    })

    // Смена слайда при клике на левую стрелку
    prev.addEventListener("click", () => {
        if (slideNum === 0) slideNum = slides.length
        moveSlider(slideNum - 1);
    })

    // Создаем функцию для переключения на нужный слайд
    function moveSlider(num) {

        // Для активной картинки
        sliderImages.querySelector(".active_img").classList.remove("active_img");
        sliderImages.querySelector(".n" + num).classList.add("active_img");

        // Для смены активной точки
        sliderDots.querySelector(".active_dot").classList.remove("active_dot");
        sliderDots.querySelector(".n" + num).classList.add("active_dot");

        // Для смены активного заголовка
        navTitles.querySelector(".active_nav_title").classList.remove("active_nav_title");
        navTitles.querySelector(".n" + num).classList.add("active_nav_title");

        // Смена текста, при переключении слайда
        city_text.innerHTML = slides[num].city;
        area_text.innerHTML = slides[num].area;
        time_text.innerHTML = slides[num].time;

        slideNum = +num;
    }
}

// Иницмализируем слайдер после загрузки страницы
document.addEventListener("DOMContentLoaded", initSlider)