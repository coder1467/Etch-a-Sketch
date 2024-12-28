const sizeBtn = document.querySelector('.size');
const resetBtn = document.querySelector('.reset');
const grid = document.querySelector('.grid');
const color = document.querySelector('input');
let gridSize = 12;

sizeBtn.onclick = () => {
    gridSize = prompt('Enter Size of Grid: ');
    makeGrid();
};

resetBtn.onclick = () => {
    makeGrid();
}

function makeGrid() {
    grid.innerHTML = '';

    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = `${500 / gridSize}px`;
        cell.style.height = `${500 / gridSize}px`;
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = color.value;
        })
        grid.appendChild(cell);
    }
}

makeGrid();
