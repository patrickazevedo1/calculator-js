const root = document.documentElement
const switchTheme = document.getElementById('switchTheme')
const calcArea = document.getElementById('calcArea')
const delButton = document.getElementById('delButton')
const calcButtons = document.querySelectorAll('.calcKey')
const clearButton = document.getElementById('clearButton')
const equalButton = document.getElementById('equalButton')
const resultInput = document.getElementById('resultInput')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4",  "3", "2", "1", "0", ".", "%", " "]

switchTheme.addEventListener('click', () => { 
    root.classList.toggle('lightTheme')
})

const calcLogic = () => {
    try {
        if (calcArea.value == '') {
            resultInput.value = 'ERROR'
        } else {
            const totalValue = eval(calcArea.value)
            resultInput.value = totalValue 
        }
    } catch (SyntaxError) {
        resultInput.value = 'ERROR'
    }
}

calcButtons.forEach((keyValue) => { 
   keyValue.addEventListener('click', () => {
        calcArea.value += keyValue.value
   })
})

calcArea.addEventListener('keydown', (ev) => { 
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
        calcArea.value += ev.key
    }
    if(ev.key == 'Backspace'){
        calcArea.value = calcArea.value.slice(0, -1)
    }
    if (ev.key == 'Enter') {
        calcLogic()   
    }
})

delButton.addEventListener('click', () => { 
    calcArea.value = calcArea.value.slice(0, -1)
    calcArea.focus()
})

equalButton.addEventListener('click', () => {
    calcLogic()
})

clearButton.addEventListener('click', () => {
    calcArea.value = ''
    resultInput.value = ''
    calcArea.focus()
})