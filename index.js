var Name = prompt("Ismingizni kiriting");
var grant = "Siz tanlagan OTMga grant asosida qabul qilindingiz";
var kontrakt = "Siz tanlagan OTMga kontrakt asosida qabul qilindingiz";
var none = "Siz tanlagan OTMga o'qishga qabul qilinmadingiz";
var error = "Noto'gri malumot kiritdingiz";

var OTM = prompt("OTMlardan birini tanlang: 1.TDIU 2.TDMI 3.MU");

var ball = prompt( Name, "balingizni kiriting:");

if (OTM == 1){
    if(ball >= 150){        
        alert(grant);
    }
    else if(ball > 120){
        alert(kontrakt);
    }
    else if(120 >= ball > 0){
        alert( none);
    }
    else{
        alert(error);
    }
}else if(OTM == 2){
    if(ball >= 160){
        alert(grant);
    }
    else if(ball > 100){
        alert(kontrakt);
    }
    else if(100 >= ball > 0){
        alert( none);
    }
    else{
        alert(error);
    }
}else if(OTM == 3){
    if(ball >= 180){
        alert(grant);
    }
    else if( ball > 168){
        alert(kontrakt);
    }
    else if(168 >= ball > 0){
        alert( none);
    }
    else{
        alert(error);
    }
}else{
    alert(error);
}
