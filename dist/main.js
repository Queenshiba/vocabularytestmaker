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



    // console.log(lengthInput)

}

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
makeATestBtn.addEventListener("click", () => selectTextbook())


function selectTextbook() {
let targetjs = require('./target')
let test = targetjs.makeATarget1900Test('test')

    if (textbooks === "Target1900") {
        console.log(test)

        // console.log(getRandomNums(minRangeInputValue, maxRangeInputValue, lengthInput))
        return makeATarget1900Test()
    } else if (textbooks === "systanPhrase") {
        console.log('no')

        // console.log(getRandomNums(minRangeInputValue, maxRangeInputValue, lengthInput))
return makeASystanPhraseTest()
    }
}
// function setRange() {
//     let textbooks = document.getElementById('textbooks').value
//     let minRangeInputValue = document.getElementById('minRangeInput').value
//     let maxRangeInputValue = document.getElementById('maxRangeInput').value
//     let lengthInput = document.getElementById('lengthInput').value


//    

//     // makeATarget1900Test()

// }


// function createTags(arr) {

//     let array = [2, 67, 82, 14, 89, 64, 24, 39, 60, 91]
//     array.forEach(num => {
//         let createTr = document.createElement('tr')
//         createTr.setAttribute("class", "row")

//         let createTdNum = document.createElement('td')
//         let createTdNumtextnode = document.createTextNode(length + 1)
//         createTdNum.appendChild(createTdNumtextnode)

//         let createTdIndex = document.createElement('td')
//         let createTdIndextextnode = document.createTextNode(num)
//         createTdIndex.appendChild(createTdIndextextnode)

//         let createTdEng = document.createElement('td')
//         let createTdEngtextnode = document.createTextNode(eng)
//         createTdEng.appendChild(createTdEngtextnode)


//         let table = document.getElementById('table')
//         table.appendChild(createTr)
//         createTr.appendChild(createTdNum)
//         createTr.appendChild(createTdIndex)
//         createTr.appendChild(createTdEng)
//     })

//     };
// if (num < 10) {

// }