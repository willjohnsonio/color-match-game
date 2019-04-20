var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colorDisplay');
var message = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.getElementById('reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init(){
  setUpModeButtons();
  setUpSquares();
  reset();
}

 

  function setUpModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
      modeButtons[i].addEventListener('click', function(){
        modeButtons[0].classList.remove('selected');
        modeButtons[1].classList.remove('selected');
        this.classList.add('selected');
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        reset();
      });
    }
  }

  function setUpSquares(){
    for(var i = 0; i < squares.length; i++) {
      //add click event listeners to squares 
      squares[i].addEventListener('click', function(){
        //get color or clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor variable
        if(clickedColor === pickedColor){
          message.textContent = 'Correct';
          resetButton.textContent = "Play Again";
          changeColors(clickedColor);
          h1.style.background = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = 'Try Again';
        }
      });
    }  
}

function reset(){
  colors = generateRandomColors(numSquares);
  //pick new random color
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = 'New colors';
  message.textContent = '';
  //change of colors of squares
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = 'steelblue';
}


resetButton.addEventListener('click', function(){
  reset();
})


function changeColors(color) {
  //loop through all squares
  for(var i = 0; i < squares.length; i++) {
    //change each color to match correct color
    squares[i].style.backgroundColor = color;
  } 
}

function pickColor() {
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
};

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //add num random colors to array
  for(var i = 0; i < num; i++){
     //get random color push in array
    arr.push(randomColor())
  
  }
  //return that array
  return arr;
}

function randomColor(){
  //pick a red from 0 to 255
  var r = Math.floor(Math.random() * 256);
  //pick a green from 0 to 255
  var g = Math.floor(Math.random() * 256);
  //pick a blue from 0 to 255
  var b = Math.floor(Math.random() * 256);
   return "rgb(" + r + ", " + g + ", " + b + ")"
}