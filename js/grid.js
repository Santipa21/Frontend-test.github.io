import {drawBox} from './main.js';
import {state} from './main.js';


// Generates each of the individual cells in the grid
export function drawGrid(container) {
    const grid = document.createElement('div');
    grid.className = 'grid';

    for (let i = 0; i < 5; i++) {

        for (let j = 0; j < 5; j++) {
            drawBox(grid, i, j)

        }
    }
    container.appendChild(grid);

}

// Reflect changes to the grid in the UI
export function updateGrid() {
    for (let i = 0; i < state.grid.length; i++) {
        for (let j = 0; j < state.grid[i].length; j++) {
            const box = document.getElementById(`box${i}${j}`);
            box.textContent = state.grid[i][j];

        }

    }
}

