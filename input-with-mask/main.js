const inputCard = document.querySelector('#inputCard')
const inputDate = document.querySelector('#inputDate')
const inputCVV = document.querySelector('#inputCVV')

const maskNumber = '####-####-####-####'
const maskDate = '##/##'
const maskCVV = '###'

let current = ''
let cardNumber = []
let dateNumber = []
let cvvNumber = []

inputCard.addEventListener('keydown', e => {
    if (e.key === 'Tab') { // If the user press TAB move to another input
        return
    }
    e.preventDefault()
    handleInput(maskNumber, e.key, cardNumber)
    inputCard.value = cardNumber.join('')
})

inputDate.addEventListener('keydown', e => {
    if (e.key === 'Tab') {
        return
    }
    e.preventDefault()
    handleInput(maskDate, e.key, dateNumber)
    inputDate.value = dateNumber.join('')
})

inputCVV.addEventListener('keydown', e => {
    if (e.key === 'Tab') {
        return
    }
    e.preventDefault()
    handleInput(maskCVV, e.key, cvvNumber)
    inputCVV.value = cvvNumber.join('')
})

function handleInput(mask, key, arr) {
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] // All the allowed keys to validate the card
    if (key === 'Backspace' && arr.length > 0) { // If the user press backspace and the array has at least one number
        arr.pop() // The pop() method removes (pops) the last element of an array
        return
    }
    // Validate the keys
    if (numbers.includes(key) && arr.length + 1 <= mask.length) { // The second condition stops when all the numbers are ingresed by the user
        if (mask[arr.length] === '-' || mask[arr.length] === '/') { // If the cursor is posicionated in a separator
            arr.push(mask[arr.length], key) // Enter the character '-' or '/'
        } else {
            arr.push(key) // Enter the key inputed by the user
        }
    }
}