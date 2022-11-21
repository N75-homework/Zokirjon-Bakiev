let a = prompt().toLowerCase()
let b = prompt().toLowerCase()
let c = prompt().toLowerCase()
let d = prompt().toLowerCase()
let e = prompt().toLowerCase()
let f = prompt().toLowerCase()
let g = prompt().toLowerCase()


let array = [a, b, c, d,  e, f, g]
let arrNumber = []
let arrWord = []

for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if ( isNaN(element)) {
        arrWord.push(element)
    }
    else {
        arrNumber.push(element)
    }
}

let arrNumberSort = arrNumber.sort((a, b) => a - b);
let arrWordSort = arrWord.sort();
console.log(arrNumberSort);
console.log(arrWordSort);
