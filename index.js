1.
// 1.1
var L = prompt('Berilgan uzunlikni SMda kiriting');
var result = (L-L%100)/100;
if (result >= 1){
alert (`Berilgan `+ L +`sm ichida, `+ result +`ta to'liq metr mavjud`);
}
else {
alert (`Berilgan `+ L +`sm ichida, to'liq metr mavjud emas`);
}

// 1.2
// var M = prompt('Berilgan og`irlikni KGda kiriting');
// var result = (M-M%1000)/1000;
// if (result >= 1){
// alert (`Berilgan `+ M +`kg ichida, `+ result +`ta to'liq tonna mavjud`);
// }
// else {
// alert (`Berilgan `+ M +`kg ichida, to'liq tonna mavjud emas`);
// }

// 1.3
// var a = prompt('A kesma uzunligini kiriting');
// var b = prompt('B kesma uzunligini kiriting');
// var c = a-a%b;
// var result = c/b;
// if (result>0) {
//     alert(result);    
// }
// else {
//     alert (`Berilgan qiymatlar noto'g'ri!`);
// }
