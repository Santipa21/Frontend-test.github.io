import dictionary from './dictionary.js'
import {state} from './main.js';


// Loop through the current row and combine all the values ​​into a string
export function getCurrentWord() {
    return state.grid[state.currentRow].reduce((prev, curr) => prev + curr);
}

// Take a word and check if it is present in the dictionary to verify if the word is valid
export function isWordValid(word) {
    return dictionary.includes(word)

}

// Shows the player's response, animation and message corresponding to whether they won or lost
export function revealWord(guess) {
    const row = state.currentRow;
    const animation_duration = 500;

    for (let i = 0; i < 5; i++) {
        const box = document.getElementById(`box${row}${i}`);
        const letter = box.textContent;

        setTimeout(() => {
            if (letter === state.secret[i]) {
                box.classList.add('right');
            } else if (state.secret.includes(letter)) {
                box.classList.add('wrong');
            } else {
                box.classList.add('empty');
            }
        }, ((i + 1) * animation_duration) / 2);

        box.classList.add('animated');
        box.style.animationDelay = `${(i * animation_duration) / 2}ms`;
    }
    const isWinner = state.secret === guess;
    const isGameOver = state.currentRow === 4;

    setTimeout(() => {
        if (isWinner) {
            alert('Felicidades, acertaste la palabra');
        } else if (isGameOver) {
            alert(`No lo lograste, la palabra era: ${state.secret}.`);
        }
    }, 3 * animation_duration);
}