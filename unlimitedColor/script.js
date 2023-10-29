const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');

let interval;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function startColorGame(){
    if(!interval){
        interval = setInterval(function(){
            let randomColor = getRandomColor();
            document.body.style.backgroundColor = randomColor;
        }, 1000)
    }
}

function stopColorGame(){
    clearInterval(interval);
    interval = null;
    document.body.style.backgroundColor = 'white';
}

startBtn.addEventListener("click", startColorGame);
stopBtn.addEventListener("click", stopColorGame)