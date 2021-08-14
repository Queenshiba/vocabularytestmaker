"use strict";

fetch("./systanPhrase.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        const originalsystanPhrase = data.systanPhrase
        // console.log(originalsystanPhrase)


        
    })