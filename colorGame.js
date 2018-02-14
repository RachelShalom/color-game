var squares = document.querySelectorAll(".square");
//this is the color that should be guessed
var guessingColor = document.querySelector("#pickedcolor");
var pickedColor = pickColor(squares.length);
var message = document.querySelector("#message");
var head = document.querySelector("h1");
var newcolorsButtons = document.getElementById("new-colors");
var btnHard = document.getElementById("hard");
var btnEasy = document.getElementById("easy");
initiateColor(squares.length);
addEventListenersToSquares();

newcolorsButtons.addEventListener("click", function() {
    if (btnHard.classList.contains("selected")) {
        resetColors(squares.length);
    } else {
        resetColors(3);
    }
});
btnHard.addEventListener("click", function() {
    this.classList.add("selected");
    btnEasy.classList.remove("selected");
    addSquares();
    resetColors(squares.length);
});
btnEasy.addEventListener("click", function() {
    this.classList.add("selected");
    btnHard.classList.remove("selected");
    removeSquare();
    resetColors(3);

});


// this function changes all squares background color to a given color
function changeColor(color) {
    for (var j = 0; j < squares.length; j++) {
        squares[j].style.backgroundColor = color;
    }
}

//generating random color
function randomColor() {
    var color = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
    return color;
}

//this function initiates the squares colors
function initiateColor(numberofsquares) {
    for (var i = 0; i < numberofsquares; i++) {
        squares[i].style.backgroundColor = randomColor();
    }
    pickedColor = pickColor(numberofsquares);
    guessingColor.textContent = squares[pickedColor].style.backgroundColor;
}
//this function add event listener to every square
function addEventListenersToSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            //in case the right color was chosen change all square colors to this color
            if (this.style.backgroundColor === guessingColor.textContent) {
                changeColor(guessingColor.textContent);
                head.style.backgroundColor = guessingColor.textContent;
                message.textContent = "Correct!";
                newcolorsButtons.textContent = "Play again?";

                //other wise make this square disapear
            } else {
                this.style.backgroundColor = "#282828"
                message.textContent = "wrong! please try again";
            }
        });
    }
}

function resetColors(numberofsquares) {
    initiateColor(numberofsquares);
    head.style.backgroundColor = "#282828";
    newcolorsButtons.textContent = "new colors";
    message.textContent = "";
}

function removeSquare() {
    for (var i = 3; i < squares.length; i++) {
        squares[i].classList.add("hidden");
    }
}

function addSquares() {
    for (var i = 3; i < squares.length; i++) {
        squares[i].classList.remove("hidden");
    }
}
// this fucnction is choosing the color to be guest from the squares
function pickColor(num) {
    return Math.floor(Math.random() * num);
}