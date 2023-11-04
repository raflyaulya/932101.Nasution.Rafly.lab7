const valueNum = document.getElementById('qtyinput')

function showShape(buttonid){
    if (buttonid == 'square'){
        showSquare(valueNum.value)
    } 
    else if (buttonid == 'triangle'){
        showTriangle(valueNum.value)
    }
    else if (buttonid == 'circle'){
        showCircle(valueNum.value)
    }
}

function showSquare(num){
    for (let i=0; i < num; i++){
        var newSquare = document.createElement('div')
        newSquare.classList.add('square')
        let size = Math.random() * 200 + 10
        newSquare.style.height = size + 'px'
        newSquare.style.width = size + 'px'
        newSquare.style.position = 'absolute'
        let x = 10 + Math.random() * window.screen.width * 0.5+ 'px'
        let y = 10 + Math.random() * window.screen.height* 0.5 + 'px'
        newSquare.style.left = x
        newSquare.style.top = y

        newSquare.addEventListener('click', (event) => {
            event.target.style.backgroundColor = 'rgba(255, 255, 0 ,0.5)'
        });
        newSquare.addEventListener('dblclick', (event) => {
            event.target.remove();
        });
        document.body.appendChild(newSquare);
    }
}

function showTriangle(num){
    for (let i=0; i<num; i++){
        var newTriangle = document.createElement('div')
        newTriangle.classList.add('triangle')
        let size = Math.random() *200+10
        newTriangle.style.borderLeft = size/2 + 'px solid transparent'
        newTriangle.style.borderRight = size/2 + 'px solid transparent'
        newTriangle.style.borderBottom = size + 'px solid blue'
        newTriangle.style.position = 'absolute'
        let x = 10+ Math.random() * window.screen.width * 0.5 + 'px'
        let y = 10 + Math.random() * window.screen.height * 0.5 + 'px'
        newTriangle.style.left = x
        newTriangle.style.top = y

        newTriangle.addEventListener('click', (event) => {
            event.target.style.borderBottom = size + 'px solid rgba(255, 255, 0, 0.5)'
        })
        newTriangle.addEventListener('dblclick', (event) => {
            event.target.remove()
        })
        document.body.appendChild(newTriangle)
    }
}


function showCircle(num){
    for (let i=0; i<num; i++){
        var newCircle = document.createElement('div')
        newCircle.classList.add('circle')
        let size = Math.random() *200+10
        newCircle.style.height = size + 'px'
        newCircle.style.width = size + 'px'
        newCircle.style.position = 'absolute'
        let x = 10 + Math.random() * window.screen.width *0.5+ 'px'
        let y = 10 + Math.random() * window.screen.height * 0.5 + 'px'
        newCircle.style.left = x
        newCircle.style.top = y

        newCircle.addEventListener('click', (event) => {
            event.target.style.backgroundColor = 'rgba(255, 255,0, 0.5)'
        })
        newCircle.addEventListener('dblclick', (event) => {
            event.target.remove()
        })
        document.body.appendChild(newCircle)
    }
}