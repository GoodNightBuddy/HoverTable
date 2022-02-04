const board = document.querySelector('#board')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES_NUMBER = 400


for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseenter', setColor)

    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

function setColor(e) {
    const el = e.target
    let color = getRandomColor(colors)
    el.style.background = color
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(e) {
    const el = e.target
    el.style.background = '#1d1d1d'
    el.style.boxShadow = '0 0 2px #000'
}

function getRandomColor(arr) {
    const index =  Math.floor(Math.random() * arr.length)
    return arr[index]
    
}

//For Touch Events

board.addEventListener('touchmove', (e) => {
    let currentTarget = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
    if (!currentTarget) return
    if (currentTarget.classList.contains('square')) {
        currentTarget.style.transition = '0s'
        setColorTouch(currentTarget)
        setTimeout(() => {
            removeColorTouch(currentTarget)
        }, 1000);
    }
})

function setColorTouch(el) {
    let color = getRandomColor(colors)
    el.style.background = color
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColorTouch(el) {
    el.style.transition = '3s ease'
    el.style.background = '#1d1d1d'
    el.style.boxShadow = '0 0 2px #000'
}