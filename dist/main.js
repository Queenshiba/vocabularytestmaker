let setLengthBtn = document.getElementById('setLengthBtn')
setLengthBtn.addEventListener('click', ()=> setRangeLength())



function setRangeLength() {
    let rangeWrap = document.getElementById('rangeWrap')
let minRangeInput = document.createElement('input')
minRangeInput.setAttribute("type", "number")

let linePtag = document.createElement('p')
let linePtagTextnode = document.createTextNode('～')
let maxRangeInput = document.createElement('input')
maxRangeInput.setAttribute("type", "number")

rangeWrap.appendChild(minRangeInput)
rangeWrap.appendChild(linePtag)
rangeWrap.appendChild(linePtagTextnode)
rangeWrap.appendChild(maxRangeInput)

let textbooks = document.getElementById('textbooks').value
console.log(textbooks)

if (textbooks = "Target1900") {
    console.log('yes')
}
}