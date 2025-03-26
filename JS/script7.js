let train = document.getElementById("train");
let position = 0;
let interval;

function startTrain() {
    clearInterval(interval); // Avoid multiple intervals
    interval = setInterval(() => {
        position += 5; // Move the train forward
        train.style.left = position + "px";

        // Reset position when train moves off screen
        if (position > window.innerWidth) {
            position = -200; // Reset train position
        }
    }, 50);
}

function stopTrain() {
    clearInterval(interval); // Stop the train
}
