let btn = document.querySelectorAll('.btn')
const buttonColors = ["green","red", "yellow", "blue"  ]
let gamePattern = [];
let userClickedPattern = []
let started = false
let level = 0

document.addEventListener('keypress', () => {

    if (!started) {
        document.querySelector("#level-title").textContent = `Level ${level}`
        generatePattern();
        started = true
    }
})

function generatePattern(){
    let random = Math.floor(Math.random()*4 )
    gamePattern.push(random)
    displayPattern(random)
}
function displayPattern(index){
    
    btn[index].style.backgroundColor = '#ccc'
    setTimeout(function(){
        btn[index].style.backgroundColor = buttonColors[index]
        
    }, 200)
    
}
