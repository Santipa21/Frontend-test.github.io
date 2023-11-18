//Get the body element to change its class

const body = document.body;

//Class that indicates dark mode

const darkModeClass = 'dark-mode';

//Funtion to switch between modes

export function toggleTheme(){
    //Toggle the dark-mode class in the body
    body.classList.toggle(darkModeClass);

    //Save the theme state to localStorage
    const isDarkMode = body.classList.contains(darkModeClass);
    localStorage.setItem('darkMode', isDarkMode);
}

// Check the state of the theme stored in localStorage on page load

export function checkThemeOnLoad() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if(isDarkMode){
        body.classList.add(darkModeClass);
    }
}