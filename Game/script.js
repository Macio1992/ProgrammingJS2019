let counter = 0

function changeColor() {
    let element = document.getElementById('jeden');
    element.classList.add('red');
    let paragraf = document.getElementById('paragraph');
    paragraf.innerHTML = 'squareClicked';
    let licznik = document.getElementById('counter');
    counter++;
    licznik.innerHTML = 'Kliknieto ' + counter;
};
