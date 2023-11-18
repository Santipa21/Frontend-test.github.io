// countdown

export function countdown(totalMinutes){
    let seconds = totalMinutes * 60;
    const countdownElement = document.getElementById('countdown');
    const countdownInterval = setInterval(() => {
        if (seconds > 0 ) {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            countdownElement.innerHTML = formatTime(minutes, remainingSeconds);
            seconds--;
        } else {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "Cambio de palabra";
        }
        
    }, 1000);
}

countdown(5);

// format time

function formatTime(minutes, seconds){
    return  `${minutes} : ${seconds}`;
}