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
    }, 500)    
}

function generateAudio(color){

    let audio = document.getElementById(color)
    audio.currentTime = 0
    audio.play()

}

// function usersTurn() {
//     buttonColors.forEach(color => {
//         document.getElementById(color).addEventListener('click', () => {
//             userClickedPattern.push(color);
//             generateAudio(color);
//             checkAnswer(userClickedPattern.length - 1)
//         });
//     });
// }

function checkAnswer(index){
    if(userClickedPattern[index] === gamePattern[index] ){
        if(userClickedPattern.length == gamePattern.length){
            generatePattern()
        }
    }else{
        let audio = document.getElementById('wrong')
        audio.play()
        resetGame()
    }
}
function resetGame(){
    gamePattern = []
    userClickedPattern = []
    level = 0
    started = false
}


// usersTurn()
btn.forEach(button => {
    button.addEventListener('click', (event) => {
        userColor = event.target.id;
        generateAudio(userColor);
        userClickedPattern.push(userColor);
        checkAnswer(userClickedPattern.length - 1);
    });
});