function createGrid(number) {
    for (let i = 0; i < number; i++) {
        const squareContainer = document.createElement('div');
        squareContainer.classList.toggle('square-container');
        for (let j = 0; j < number; j++) {
            const square = document.createElement('div');
            square.classList.toggle('square');

            squareContainer.appendChild(square);
        }
        gridContainer.appendChild(squareContainer);
    }
}

const gridContainer = document.querySelector('.grid-container');
createGrid(16);