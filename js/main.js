// Seleciona todas as imagens com a classe "projects-img"
const images = document.querySelectorAll('.div-link');
 

// Para cada imagem, adiciona um event listener para o evento "mouseover"
images.forEach((image) => {
  image.addEventListener('mouseover', () => {
    // Define a opacidade da imagem como 50%
    

    // Cria os links
    const link1 = document.createElement('a');
    const link2 = document.createElement('a');
    const br = document.createElement('br');

    

    // Define o endereço dos links
    link1.href = '#';
    link2.href = '#';

    // Define o texto dos links
    link1.textContent = 'View project';
    link2.textContent = 'View code';

    // Adiciona os links dentro da imagem
    image.appendChild(link1);
    image.appendChild(link2);

    link1.style.textDecoration = 'none';
    link2.style.textDecoration = 'none';
    
    link2.style.marginTop = '40px';
  });

  // Adiciona um event listener para o evento "mouseout"
  image.addEventListener('mouseout', () => {
    // Define a opacidade da imagem como 100%
    image.style.opacity = 1;

    // Remove os links da imagem
    image.removeChild(image.lastChild);
    image.removeChild(image.lastChild);
  });
});