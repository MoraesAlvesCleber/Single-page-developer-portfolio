const divImgs = document.querySelectorAll('.div-img');


divImgs.forEach((divImg) => {

  const divLink = divImg.querySelector('.div-link');
  const img = divImg.querySelector('.projects-img');

  divImg.addEventListener('mouseover', () => {
    divLink.style.display = 'flex';
    img.style.opacity = '0.8';
    img.style.filter = 'brightness(0.2)';
     
  

  });

  // Adiciona um event listener para o evento "mouseout"
  divImg.addEventListener('mouseout', () => {
    divLink.style.display = 'none';
    img.style.opacity = '1';
    img.style.filter = 'brightness(1)';
    

  });
});

                                            //////////////footer inputs////////////////




const patternNome = /^[a-zA-Z\s]*$/;
const patternEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const inputNome = document.getElementById('input-nome');
const inputEmail = document.getElementById('input-email');

function validateInputName(input) {
  const inputValue = input.value;
 
  if (inputValue === '') {
    input.style.borderBottom = "2px solid white";
  } else if (patternNome.test(inputValue)) {
    input.style.borderBottom = "2px solid green";
  } else {
    input.style.borderBottom = "2px solid red";
  }
}

function validateInputEmail(input) {
  const inputValue = input.value;
 
  if (inputValue === '') {
    input.style.borderBottom = "2px solid white";
  } else if (patternEmail.test(inputValue)) {
    input.style.borderBottom = "2px solid green";
  } else {
    input.style.borderBottom = "2px solid red";
  }
}



inputNome.addEventListener('input', function() {
  validateInputName(inputNome);  
});

inputEmail.addEventListener('input', function() {
validateInputEmail(inputEmail);
});
