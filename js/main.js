import { drawGrid, updateGrid } from './grid.js';
import { getCurrentWord, isWordValid, revealWord} from './wordValidation.js';
import { countdown} from './countdown.js';
import { registerKeyboardEvents, isLetter, addLetter, removeLetter} from './keyboard.js';
import dictionary from './dictionary.js';
import { toggleTheme, checkThemeOnLoad } from './themeToggle.js';

// Call to check theme on page load

checkThemeOnLoad();

// Initialize state object with random dictionary secret and empty 5x5 grid
export const state = {
    secret: dictionary[Math.floor(Math.random() * dictionary.length)],
    grid: Array(5)
        .fill()
        .map(() => Array(5).fill('')),
    currentRow: 0,
    currentCol: 0,
};

// Create a grid box and customize it with a unique ID
export function drawBox(container, row, col, letter = '') {
    const box = document.createElement('div');
    box.className = 'box';
    box.id = `box${row}${col}`;
    box.textContent = letter;

    container.appendChild(box);
    return box;
}

// Set up the game environment, draw the grid and record keyboard events
function startup() {
    const game = document.getElementById('game')
    drawGrid(game);

    registerKeyboardEvents();   
}

startup();

// open modal instructions

document.addEventListener("DOMContentLoaded", function(){
    const modal = document.getElementById('default-modal');
    if(modal){
        modal.classList.remove('hidden');
    }
});

document.addEventListener("DOMContentLoaded", function(){
    const themeToggleButton = document.getElementById('theme-toggle-button');
    const body = document.body;

    themeToggleButton.addEventListener('click' , function(){
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');
    });
});

