const container = document.querySelector('.container');

for (let counter = 100; counter > 0; counter--) {
    console.log(counter);
    const element = document.createElement('div');
    element.classList.add('box');

    if (counter % 3 == 0 && counter % 5 == 0) {
        console.log('fizzbuzz');
        element.classList.add('green');
        element.innerHTML = 'fizzbuzz';
    }
    else if (counter % 3 == 0) {
        console.log('fizz');
        element.classList.add('red');
        element.innerHTML = 'fizz';
    }
    else if (counter % 5 ==0) {
        console.log('buzz');
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