"use strict";

fetch("./target.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        const originaltarget = data.target1900
        // console.log(data.target1900)


        // originaltarget.forEach(index => {
        //     let num = index.number
        //     let eng = index.eng
        //     let jpn = index.jpn;
        //     // console.log(index[0])
        // });

        // makeATestBtn.addEventListener("click", () => makeATarget1900Test())
        // console.log(originaltarget)

        function makeATarget1900Test(originaltarget) {



            //         // minInRange
            //         // maxInRange
            //         // amountsInRange

            //         setRangeLength(selectedNumsinRange)

            // originaltarget.forEach((item, length) => {
            //     let num = item.number
            //     let eng = item.eng
            //     let jpn = item.jpn;
            
            //     if (selectedNumsinRange === num) {

            //     }


            // if (num < 10) {
            //     let createTr = document.createElement('tr')
            //     createTr.setAttribute("class", "row")

            //     let createTdNum = document.createElement('td')
            //     let createTdNumtextnode = document.createTextNode(length + 1)
            //     createTdNum.appendChild(createTdNumtextnode)

            //     let createTdIndex = document.createElement('td')
            //     let createTdIndextextnode = document.createTextNode(num)
            //     createTdIndex.appendChild(createTdIndextextnode)

            //     let createTdEng = document.createElement('td')
            //     let createTdEngtextnode = document.createTextNode(eng)
            //     createTdEng.appendChild(createTdEngtextnode)


            //     let table = document.getElementById('table')
            //     table.appendChild(createTr)
            //     createTr.appendChild(createTdNum)
            //     createTr.appendChild(createTdIndex)
            //     createTr.appendChild(createTdEng)
            // }
            // });
        }


    })



