
var piyodaSpeed = 3.6;
var velisopedSpeed = 20.1;
var mashinaSpeed = 70;
var samalyotSpeed = 800;


var $inputText = document.querySelector("#input__text");
var $form = document.querySelector("#form");
var $btn = document.querySelector("#btn");


$form.addEventListener("submit",function(evt) {
    evt.preventDefault()
    if ($inputText.value >= piyodaSpeed) {
        var inputResult = $inputText.value / piyodaSpeed;
        var $inputResult = (Math.ceil(inputResult))
        var piyodaMin = (($inputText.value % piyodaSpeed) / piyodaSpeed) * 60;
        var $piyodaMin = (Math.ceil(piyodaMin))
        document.getElementById("piyoda").textContent = $inputResult + " soat, " + $piyodaMin + " minut";
    }
    else if ($inputText.value < piyodaSpeed && $inputText.value > 0){
        var inputResult = $inputText.value / piyodaSpeed;
        var elsePiyodaResult = inputResult * 60;
        var piyodaResult = (Math.ceil(elsePiyodaResult));
        document.getElementById("piyoda").textContent = piyodaResult + " minut";
    }
    else {
        document.getElementById("piyoda").textContent = "noto'g'ri ma`lumot!";
    }
    
    
    
    if ($inputText.value >= velisopedSpeed) {
        var inputResult = $inputText.value / velisopedSpeed;
        var $inputResult = (Math.ceil(inputResult))
        var velisopedMin = (($inputText.value % velisopedSpeed) / velisopedSpeed) * 60;
        var $velisopedMin = (Math.ceil(velisopedMin))
        document.getElementById("Velosiped").textContent = $inputResult + " soat, " + $velisopedMin + " minut";
    }
    else if ($inputText.value < velisopedSpeed && $inputText.value > 0){
        var inputResult = $inputText.value / velisopedSpeed;
        var elseVelisopedResult = inputResult * 60;
        var velispoedResult = (Math.ceil(elseVelisopedResult));
        document.getElementById("Velosiped").textContent = velispoedResult + " minut";
    }
    else {
        document.getElementById("Velosiped").textContent = "noto'g'ri ma`lumot!";
    }
    
    
    
    if ($inputText.value >= mashinaSpeed) {
        var inputResult = $inputText.value / mashinaSpeed;
        var $inputResult = (Math.ceil(inputResult))
        var mashinaMin = (($inputText.value % mashinaSpeed) / mashinaSpeed) * 60;
        var $mashinaMin = (Math.ceil(mashinaMin))
        document.getElementById("Mashina").textContent = $inputResult + " soat, " + $mashinaMin + " minut";
    }
    else if ($inputText.value < mashinaSpeed && $inputText.value > 0){
        var inputResult = $inputText.value / mashinaSpeed;
        var elsemashinaResult = inputResult * 60;
        var mashinaResult = (Math.ceil(elsemashinaResult));
        document.getElementById("Mashina").textContent = mashinaResult + " minut";
    }
    else {
        document.getElementById("Mashina").textContent = "noto'g'ri ma`lumot!";
    }
    
    
    
    if ($inputText.value >= samalyotSpeed) {
        var inputResult = $inputText.value / samalyotSpeed;
        var $inputResult = (Math.ceil(inputResult))
        var samalyotMin = (($inputText.value % samalyotSpeed) / samalyotSpeed) * 60;
        var $samalyotMin = (Math.ceil(samalyotMin))
        document.getElementById("Samalyot").textContent = $inputResult + " soat, " + $samalyotMin + " minut";
    }
    
    else if ($inputText.value < samalyotSpeed && $inputText.value > 0){
        var inputResult = $inputText.value / samalyotSpeed;
        var elseSamalyotResult = inputResult * 60;
        var samalyotResult = (Math.ceil(elseSamalyotResult));
        document.getElementById("Samalyot").textContent = samalyotResult + " minut";
    }
    else {
        document.getElementById("Samalyot").textContent = "noto'g'ri ma`lumot!";
    }
})