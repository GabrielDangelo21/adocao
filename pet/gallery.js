const images = ["\\192.168.0.173\Compartilhada\adocao-animais\pet\IMAGENS\imagem1.jpg", "\\192.168.0.173\Compartilhada\adocao-animais\pet\IMAGENS\imagem2.jpg", "\\192.168.0.173\Compartilhada\adocao-animais\pet\IMAGENS\imagem3.jpg"];

let index = 0;

const sliderImage = document.querySelector(".slider-image");
const prevArrow = document.querySelector(".prev-arrow");
const nextArrow = document.querySelector(".next-arrow");

prevArrow.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  sliderImage.src = images[index];
});

nextArrow.addEventListener("click", () => {
  index = (index + 1) % images.length;
  sliderImage.src = images[index];
});