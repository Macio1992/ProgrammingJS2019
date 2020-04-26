let counter = 0

function changeColor(id) {
    let element = document.getElementById('jeden');
    element.classList.add('red');
    let paragraf = document.getElementById('paragraph');
    paragraf.innerHTML = 'squareClicked';
    const licznik = document.getElementById('counter');
    counter++;
    licznik.innerHTML = 'Kliknieto ' + counter;
    console.log('Kliknięto element o id ', id);
};
