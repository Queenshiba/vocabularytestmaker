"use strict";

fetch("./target.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        const originaltarget = data.target1900
        console.log(data.target1900)

        originaltarget.forEach(index => {
            let num = index.number
            let eng = index.eng
            let jpn = index.jpn;
            // console.log(index)
        });

        // make a test btn
        let makeATestBtn = document.getElementById('makeATestBtn')
        makeATestBtn.addEventListener("click", () => makeATest())

        function makeATest() {
            originaltarget.forEach(index => {
                let num = index.number
                let eng = index.eng
                let jpn = index.jpn;
                // console.log(index)

                let createTr = document.createElement('tr')
                createTr.setAttribute("class", "row")
                let createTd = document.createElement('td')
                createTd = "hey"
                let table = document.getElementById('table')
                table.appendChild(createTr)
                createTr.appendChild(createTd)
            });


        }
    })
