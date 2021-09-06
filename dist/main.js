

let setLengthBtn = document.getElementById('setLengthBtn')
setLengthBtn.addEventListener('click', () => setRangeLength())



function setRangeLength() {
    let rangeWrap = document.getElementById('rangeWrap')
    let minRangeInput = document.createElement('input')
    minRangeInput.setAttribute("type", "number")
    minRangeInput.setAttribute("id", "minRangeInput")
    minRangeInput.setAttribute("min", "1")

    let linePtag = document.createElement('p')
    let linePtagTextnode = document.createTextNode('～')
    let maxRangeInput = document.createElement('input')
    maxRangeInput.setAttribute("type", "number")
    maxRangeInput.setAttribute("id", "maxRangeInput")

    rangeWrap.appendChild(minRangeInput)
    rangeWrap.appendChild(linePtag)
    rangeWrap.appendChild(linePtagTextnode)
    rangeWrap.appendChild(maxRangeInput)

}

// testfunction()

// make numbers random
let minInRange = 1
let maxInRange = 40
let amountsInRange = 15



function getRandomNums(min, max, length) {
    // console.log(length)
    let selectedNumsinRange = []
    for (let l = 0; l < length; l++) {
        // let randomNums = Math.random() * max - min + min;
        let randomNums = Math.floor(Math.random() * (max - min + 1) + min)
        selectedNumsinRange.push(Math.round(randomNums))

    }
    // console.log(selectedNumsinRange)
    return selectedNumsinRange
}





// make a test btn
let makeATestBtn = document.getElementById('makeATestBtn')
makeATestBtn.addEventListener("click", () => makeATest())


function makeATest() {


    let textbooks = document.getElementById('textbooks').value
    if (textbooks === "Target1900") {
        // alert("makeATestBtnTarget1900")
        console.log("makeATestBtnTarget1900")
        return makeATarget1900Test()
    } else if (textbooks === "systanPhrase") {
        alert("makeATestBtnsystanPhrase")
        return makeASystanPhraseTest()

    }
}
function setRange() {
    let textbooks = document.getElementById('textbooks').value
    let minRangeInputValue = document.getElementById('minRangeInput').value
    let maxRangeInputValue = document.getElementById('maxRangeInput').value
    let lengthInput = document.getElementById('lengthInput').value

    // makeATarget1900Test()
}




