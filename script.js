const sizeBtn = document.querySelector('.size');
const resetBtn = document.querySelector('.reset');
let gridSize = 64;


sizeBtn.addEventListener('click', () => {
    gridSize = prompt('Enter Size of Grid: ');
    makeGrid();
});

function makeGrid() {

}