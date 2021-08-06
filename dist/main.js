"use strict";

fetch("./target.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        const originaltarget = data.target1900
        const [num, eng, jpn] = [originaltarget.number, originaltarget.eng, originaltarget.jpn];
        console.log(data.target1900)
        console.log(typeof data.target1900)
        let result = data.find(obj => {
            return obj.eng
        })
        console.log(result)
    })
