function drawBox(container, row, col, box = '') {
    const letter = document.createElement('div')
    letter.className = 'letter';
    letter.id = `letter${row}${col}`;
    letter.textContent = letter;

    container.appendChild(letter);
    return letter;
}

function drawGrid(container) {
    const grid = document.createElement('div');
    grid.className = 'grid';

    for (let i = 0; i < 5; i++) {

        for (let j = 0; j < 5; i++) {
            drawBox(grid, i, j)

        } 
    }
    container.appendChild(grid);

}

function startup() {
    const board = document.getElementById('board')
    drawGrid(board)
}

startup();