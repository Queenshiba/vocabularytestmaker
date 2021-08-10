"use strict";

fetch("./systango.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        const originalsystan = data.systan
        console.log(originalsystan)
    })