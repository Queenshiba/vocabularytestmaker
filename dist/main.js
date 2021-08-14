let setLengthBtn = document.getElementById('setLengthBtn')
setLengthBtn.addEventListener('click', () => setRangeLength())



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


}

// make numbers random
let minInRange = 1
let maxInRange = 40
let amountsInRange = 15


function getRandomNums(min, max, length) {
    console.log(length)
    let selectedNumsinRange = []
    for (let l = 0; l < length; l++) {
        let randomNums = Math.random() * max - min + min;
        selectedNumsinRange.push(Math.round(randomNums))

    }

    return makeATest(selectedNumsinRange)
}


// let minRangeInputValue = document.getElementById('minRangeInput').value
// let maxRangeInputValue = document.getElementById('maxRangeInput').value
// console.log(minRangeInputValue)
// console.log(maxRangeInputValue)

// make a test btn
let makeATestBtn = document.getElementById('makeATestBtn')
makeATestBtn.addEventListener("click", () => makeATest())

function makeATest() {
    if (textbooks === "Target1900") {
        console.log('yes')
        getRandomNums(min, max, length)


    } else if (textbooks === "systanPhrase") {
        console.log('no')
        getRandomNums(min, max, length)
    }
}
