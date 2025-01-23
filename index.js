function createGrid(number) {
    for (let i = 0; i < number; i++) {
        const squareContainer = document.createElement('div');
        squareContainer.classList.toggle('square-container');
        for (let j = 0; j < number; j++) {
            const square = document.createElement('div');
            square.classList.toggle('square');

            square.addEventListener('mouseover', (event) => {
                squareHover(square);
            });

            squareContainer.appendChild(square);
        }
        gridContainer.appendChild(squareContainer);
    }
}

function squareHover(square) {
    square.style.backgroundColor = `rgb(${randomRGBValue()}, ${randomRGBValue()}, ${randomRGBValue()})`;
}

function randomRGBValue() {
    return Math.floor(Math.random() * 256);
}

function newGrid() {
    let newNumber = Math.floor(parseInt(prompt('Choose the number of squares per side from 1 to 100:')));
    if (newNumber > 100) {
        return alert('ERROR: Number is too large! Please input a number less than or equal to 100');
    } else if (newNumber < 1) {
        return alert('ERROR: Number is too small! Please input a number minimum of 1!');
    } else if (!newNumber) {
        return alert('ERROR: Please type in a valid number and not a string!');
    }
    
    // removes every square inside of grid container
    gridContainer.replaceChildren();
    createGrid(newNumber);
}

const gridContainer = document.querySelector('.grid-container');
const newGridButton = document.querySelector('.new-grid-button');

newGridButton.addEventListener('click', (event) => {
    newGrid();
});
createGrid(16);