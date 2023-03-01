const divImgs = document.querySelectorAll('.div-img');



divImgs.forEach((divImg) => {

  const divLink = divImg.querySelector('.div-link');

  divImg.addEventListener('mouseover', () => {
    divLink.style.display = 'flex';
  

  });

  // Adiciona um event listener para o evento "mouseout"
  divImg.addEventListener('mouseout', () => {
    divLink.style.display = 'none';

  });
});
