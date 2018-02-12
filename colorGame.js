//generating rancom color
function randomColor() {

    var color = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
    return color;
}


//choose the squarese
function initiateColor() {
    var squares = document.querySelectorAll(".square");
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = randomColor();
    }
    var guessingColor = document.querySelector("span");
    var chosenColor = Math.floor(Math.random() * squares.length);
    guessingColor.textContent = squares[chosenColor].style.backgroundColor;

    addEventListenerToSquares(squares, guessingColor);
}

function addEventListenerToSquares(squares, guessingColor) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            //in case the right color was chosen change all square colors to this color
            if (this.style.backgroundColor === guessingColor.textContent) {
                for (var j = 0; j < squares.length; j++) {
                    squares[j].style.backgroundColor = guessingColor.textContent;
                }
                //other wise make this square disapear
            } else {
                this.style.backgroundColor = "#282828"
            }
        })
    }
}

initiateColor();