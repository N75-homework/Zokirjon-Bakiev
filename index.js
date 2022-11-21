
let $inputForm = document.querySelector('#inputForm');
let $inputTel = document.querySelector('#inputTel');
let $inputBtn = document.querySelector("#inputBtn");
let guitars = document.querySelector('aaa')
;

$inputForm.addEventListener('submit', function(evt) {
    evt.preventDefault()
    let $dateInfo = $inputTel.value.split('')
    let arr =  $dateInfo.slice(0,9)
    let str = arr.join('')
    let result2 = str.padEnd(13, '#')
    console.log('telNumber: ' + result2);
    document.getElementById("aaa").innerHTML = 'telNumber: ' + result2;
})
