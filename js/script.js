// creare numeri da 1 a 100
const container = document.querySelector('.container');

for (let i = 0; i < 30; i++) {
  const element = document.createElement('div');
  element.classList.add('box');

  if (i % 2 == 1) { //resto == 1 allora e dispari
    //div verdi
    element.classList.add('green');
    element.innerHTML = 'numero dispari ' + i;
  } else {
    // div gialli
    element.classList.add('yellow');
    element.innerHTML = 'numero pari ' + i;
  }
}
