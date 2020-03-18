const arrayColors = ['green', 'red', 'yellow', 'blue']
let awnser = true,
    addListener = true,
    arrayAnwser = [],
    arrayClicks = [],
    boxGreen = document.querySelector(".green"),
    boxRed = document.querySelector(".red"),
    boxYellow = document.querySelector(".yellow"),
    boxBlue = document.querySelector(".blue"),
    container = document.querySelector('.container'),
    i = 0,
    tries = 0,
    nextLevel = 1

var gameSet = () => {
    var randomNumber = Math.floor(Math.random() * 4);
    arrayAnwser.push(arrayColors[randomNumber])

}

function enlightenBox(color) {
    switch (color) {
        case 'green':
            boxGreen.style.backgroundColor = "green"
            break;
        case 'red':
            boxRed.style.backgroundColor = "red"
            break;
        case 'yellow':
            boxYellow.style.backgroundColor = "yellow"
            break;
        case 'blue':
            boxBlue.style.backgroundColor = "blue"
            break;
        default:
            break;
    }

}

function gameCheck() {
    if (arrayClicks.length >= arrayAnwser.length) { 
        boxGreen.classList.remove("green-click")
        boxRed.classList.remove("red-click")
        boxYellow.classList.remove("yellow-click")
        boxBlue.classList.remove("blue-click")
        clickString = arrayClicks.toString()
        anwserString = arrayAnwser.toString()
        if (clickString === anwserString) {
            gameNextLevel()
        } else {
            document.querySelector('body').innerHTML= "<h1>VOCÊ PERDEU</h1>"
            document.querySelector('body').innerHTML += `<div>
                Ordem correta: ${arrayAnwser
                }</div>`
            document.querySelector('body').innerHTML += `<div>
                Sua Resposta: ${arrayClicks
             }</div`
            document.querySelector('body').innerHTML += "<button onclick='refreshPage()'>Tentar novamente</button>"
        }
    }
}

function refreshPage(){
    location.reload();
}

function gameNextLevel() {
    nextLevel++
    arrayClicks = []
    gameSet()
    tries = 0
    var gameInterval = setInterval(() => {
        color = arrayAnwser[tries]
        enlightenBox(color)
        setTimeout(() => {
            boxGreen.style.backgroundColor = ""
            boxRed.style.backgroundColor = ""
            boxYellow.style.backgroundColor = ""
            boxBlue.style.backgroundColor = ""
        }, 1000)
        tries++
        if (tries >= arrayAnwser.length) {
            clearInterval(gameInterval)
            gameStart()
        }
    }, 2000);
}

function gameStart() {
    boxGreen.classList.add("green-click")
    boxRed.classList.add("red-click")
    boxYellow.classList.add("yellow-click")
    boxBlue.classList.add("blue-click")


    if (addListener === true) {
        addListener = false
        boxGreen.addEventListener('click', () => {
            arrayClicks.push('green')
            gameCheck()
        })
        boxRed.addEventListener('click', () => {
            arrayClicks.push('red')
            gameCheck()
        })
        boxYellow.addEventListener('click', () => {
            arrayClicks.push('yellow')
            gameCheck()
        })
        boxBlue.addEventListener('click', () => {
            arrayClicks.push('blue')
            gameCheck()
        })
    
    }
}

var gameInterval = setInterval(() => {
        color = arrayAnwser[tries]
        enlightenBox(color)
        setTimeout(() => {
            boxGreen.style.backgroundColor = ""
            boxRed.style.backgroundColor = ""
            boxYellow.style.backgroundColor = ""
            boxBlue.style.backgroundColor = ""
        }, 1000)
        tries++
        if (tries >= arrayAnwser.length) {
            clearInterval(gameInterval)
            gameStart()
        }
    }, 2000);



gameSet()