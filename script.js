
document.addEventListener('DOMContentLoaded', () => {
  // Menu Hamburger
  const menuToggle = document.querySelector('.menu-toggle');
  const navUl = document.querySelector('nav ul');

  menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('active');
  });

  // Gallery Carousel
  let indexFoto = 0;
  const carousel = document.getElementById('carousel');
  const imagens = carousel.querySelectorAll('img');
  const totalFotos = imagens.length;

  window.mudarFoto = (direcao) => {
    indexFoto = (indexFoto + direcao + totalFotos) % totalFotos;
    carousel.style.transform = `translateX(-${indexFoto * 100}%)`;
  };

  // Depoimentos Carousel
  let currentDepoimentoIndex = 0;
  const depoimentoCarousel = document.getElementById('depoimentoCarousel');
  const totalDepoimentos = depoimentoCarousel.children.length;

  window.moveDepoimento = (direction) => {
    currentDepoimentoIndex = (currentDepoimentoIndex + direction + totalDepoimentos) % totalDepoimentos;
    depoimentoCarousel.style.transform = `translateX(-${currentDepoimentoIndex * 100}%)`;
  };

  // Recalcular carrossel ao redimensionar a janela
  window.addEventListener('resize', () => {
    carousel.style.transform = `translateX(-${indexFoto * 100}%)`;
    depoimentoCarousel.style.transform = `translateX(-${currentDepoimentoIndex * 100}%)`;
  });
});