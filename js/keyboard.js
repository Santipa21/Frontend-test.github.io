import {state} from './main.js';
import { updateGrid } from './grid.js';
import { getCurrentWord } from './wordValidation.js';
import { isWordValid } from './wordValidation.js';
import { revealWord } from './wordValidation.js';


// Manage keystrokes and add or delete letters, check word validity and update the grid
export function registerKeyboardEvents() {
    document.body.onkeydown = (e) => {
        const key = e.key;
        if (key === 'Enter') {
            if (state.currentCol === 5) {
                const word = getCurrentWord();
                if (isWordValid(word)) {
                    revealWord(word);
                    state.currentRow++;
                    state.currentCol = 0;

                } else {
                    alert('No es una palabra valida');
                }
            }
        }
        if (key === 'Backspace') {
            removeLetter();

        }
        if (isLetter(key)) {
            addLetter(key)
        }
        updateGrid();
    };
}

// It checks if the letter is a letter of the alphabet
export function isLetter(key) {
    return key.length === 1 && key.match(/[a-z]/i);
}

// Inserts a letter into the grid at the current position advancing to the next if it is not already filled
export function addLetter(letter) {
    if (state.currentCol === 5) return;
    state.grid[state.currentRow][state.currentCol] = letter;
    state.currentCol++;
}

// Delete the last letter entered in the grid and go back if you still don't know you have reached the first grid
export function removeLetter() {
    if (state.currentCol === 0) return;
    state.grid[state.currentRow][state.currentCol - 1] = '';
    state.currentCol--;
}