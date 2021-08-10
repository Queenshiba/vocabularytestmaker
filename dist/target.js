"use strict";

fetch("./target.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        const originaltarget = data.target1900
        console.log(data.target1900)


        // originaltarget.forEach(index => {
        //     let num = index.number
        //     let eng = index.eng
        //     let jpn = index.jpn;
        //     // console.log(index)
        // });

        // make a test btn
        let makeATestBtn = document.getElementById('makeATestBtn')
        makeATestBtn.addEventListener("click", () => makeATest())

        function makeATest(selectedNumsinRange) {

            // minInRange
            // maxInRange
            // amountsInRange



            originaltarget.forEach((item, length) => {
                let num = item.number
                let eng = item.eng
                // let jpn = item.jpn;
                if (selectedNumsinRange === num) {

                }


                if (num < 10) {
                    let createTr = document.createElement('tr')
                    createTr.setAttribute("class", "row")

                    let createTdNum = document.createElement('td')
                    let createTdNumtextnode = document.createTextNode(length + 1)
                    createTdNum.appendChild(createTdNumtextnode)

                    let createTdIndex = document.createElement('td')
                    let createTdIndextextnode = document.createTextNode(num)
                    createTdIndex.appendChild(createTdIndextextnode)

                    let createTdEng = document.createElement('td')
                    let createTdEngtextnode = document.createTextNode(eng)
                    createTdEng.appendChild(createTdEngtextnode)


                    let table = document.getElementById('table')
                    table.appendChild(createTr)
                    createTr.appendChild(createTdNum)
                    createTr.appendChild(createTdIndex)
                    createTr.appendChild(createTdEng)
                }
            });
        }


    })



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
