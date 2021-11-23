// creare numeri da 1 a 100
// const container = document.querySelector('.container');

// for (let i = 0; i < 30; i++) {
//   const element = document.createElement('div');
//   element.classList.add('box');

//   if (i % 2 == 1) { //resto == 1 allora e dispari
//     //div verdi
//     element.classList.add('green');
//     element.innerHTML = 'numero dispari ' + i;
//   } else {
//     // div gialli
//     element.classList.add('yellow');
//     element.innerHTML = 'numero pari ' + i;
//   }

//   container.append(element);
// }

const container = document.querySelector('.container');

for (let counter = 100; counter > 0; counter--) {
    // console.log(counter);
    const element = document.createElement('div');
    element.classList.add('box');

    if (counter % 3 == 0 && counter % 5 == 0) {
        // console.log('fizz');
        element.classList.add('green');
        element.innerHTML = 'fizzbuzz';
    }
    else if (counter % 3 == 0) {
        element.classList.add('red');
        element.innerHTML = 'fizz';
    }
    else if (counter % 5 ==0) {
        // console.log('buzz');
        element.classList.add('yellow');
        element.innerHTML = 'buzz';
    } 
    else {
        // console.log(counter);
        element.innerHTML = counter;
        element.classList.add('blu');
    }

    container.append(element);
}