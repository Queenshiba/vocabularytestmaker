let setLengthBtn = document.getElementById('setLengthBtn')
setLengthBtn.addEventListener('click', ()=> setRangeLength())



function setRangeLength() {
    let rangeWrap = document.getElementById('rangeWrap')
let minRangeInput = document.createElement('input')
minRangeInput.setAttribute("type", "number")
minRangeInput.setAttribute("id", "minRangeInput")

let linePtag = document.createElement('p')
let linePtagTextnode = document.createTextNode('～')
let maxRangeInput = document.createElement('input')
maxRangeInput.setAttribute("type", "number")
maxRangeInput.setAttribute("id", "maxRangeInput")

rangeWrap.appendChild(minRangeInput)
rangeWrap.appendChild(linePtag)
rangeWrap.appendChild(linePtagTextnode)
rangeWrap.appendChild(maxRangeInput)

let textbooks = document.getElementById('textbooks').value
let lengthInput = document.getElementById('lengthInput').value
console.log(lengthInput)

let minRangeInputValue = document.getElementById('minRangeInput').value
let maxRangeInputValue = document.getElementById('maxRangeInput').value
console.log(minRangeInputValue)
console.log(maxRangeInputValue)

if (textbooks === "Target1900") {
    console.log('yes')


}else {
    console.log('no')
}
}