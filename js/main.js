const divImgs = document.querySelectorAll('.div-img');
 



divImgs.forEach((divImg) => {

  const divLink = divImg.querySelector('.div-link');
  const img = divImg.querySelector('.projects-img');

  divImg.addEventListener('mouseover', () => {
    divLink.style.display = 'flex';
    img.style.opacity = '0.8';
    img.style.filter = 'brightness(0.2)';
    img.style.transition = 'opacity 1s ease';
  

  });

  // Adiciona um event listener para o evento "mouseout"
  divImg.addEventListener('mouseout', () => {
    divLink.style.display = 'none';
    img.style.opacity = '1';
    img.style.filter = 'brightness(1)';
    img.style.transition = 'opacity 1s ease';

  });
});
