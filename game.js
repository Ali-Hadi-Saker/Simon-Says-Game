let btn = document.querySelectorAll('.btn')
const buttonColors = ["green","red", "yellow", "blue"  ]
let gamePattern = [];
let userClickedPattern = []
let started = false
let level = 0
var userColor

document.addEventListener('keypress', () => {

    if (!started) {
        document.querySelector("#level-title").textContent = `Level ${level}`
        generatePattern();
        started = true
    }
})

function generatePattern(){
    level++
    document.querySelector("#level-title").textContent = `Level ${level}`
    userClickedPattern = []
    let random = Math.floor(Math.random()*4 )
    gamePattern.push(buttonColors[random])
    displayPattern(random)
    
}

function displayPattern(index){    

    btn[index].style.backgroundColor = '#ccc'
    setTimeout(function(){
        btn[index].style.backgroundColor = buttonColors[index]
        generateAudio(buttonColors[index])        
    }, 300)    
}

function generateAudio(color){

    let audio = document.getElementById(color)
    audio.currentTime = 0
    audio.play()

}

function checkAnswer(index){
    if(userClickedPattern[index] === gamePattern[index] ){
        if(userClickedPattern.length == gamePattern.length){
            setTimeout(function(){
                generatePattern()
            },500)
        }
    }else{
        let audio = document.getElementById('wrong')
        audio.play()
        document.querySelector("#level-title").textContent = `Level 0`
        document.querySelector("#level-title").textContent = `Game Over, Press Any Key to Restart`
        document.body.classList.add('game-over');
        setTimeout(function(){
            document.body.classList.remove('game-over');
        }, 300)
        resetGame()
    }
}
function resetGame(){
    gamePattern = []
    userClickedPattern = []
    level = 0
    started = false
}


btn.forEach(button => {
    button.addEventListener('click', (event) => {
        userColor = event.target.id;
        generateAudio(userColor);
        userClickedPattern.push(userColor);
        checkAnswer(userClickedPattern.length - 1);
    });
});