"use strict";
const getSystanPhraseJson = async () => {
    await
fetch("./systanPhrase.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        const originalsystanPhrase = data.systanPhrase
        // console.log(originalsystanPhrase)

        function makeASystanPhraseTest(){

        }
        
    })
}
    function makeASystanPhraseTest(){
alert('makeASystanPhraseTest')
    }