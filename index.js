


const $form = document.querySelector("#formContactInfo");
const $list = document.querySelector('#list');

let userArray = [{}];

$form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let { userName,
        userPhone,
        userAddress,
        doughThickness,
        size,
        tomato,
        pickledCucumber,
        turkeyMeat,
        mushroom,
        olive,
        horseMeat,
        pepper,
        sausages
    } = evt.target.elements;

    let newObj = {
        id: userArray.length,
        userName: userName.value.trim(),
        userPhone: userPhone.value.trim(),
        userAddress: userAddress.value.trim(),
        doughThickness: doughThickness.value.trim(),
        size: size.value.trim(),
        tomato: tomato,
        pickledCucumber: pickledCucumber,
        turkeyMeat: turkeyMeat,
        mushroom: mushroom,
        olive: olive,
        horseMeat: horseMeat,
        pepper: pepper,
        sausages: sausages,
    };

    let tomotabox = document.querySelectorAll('input[name="tomato"]:checked');
    let tomatos = [];
    tomotabox.forEach((checkbox) => {
        newObj.tomato = checkbox.value;
    });
    let pickledCucumberboxes = document.querySelectorAll('input[name="pickledCucumber"]:checked');
    let pickledCucumbers = [];
    pickledCucumberboxes.forEach((checkbox) => {
        newObj.pickledCucumber = checkbox.value;
    });
    let turkeyMeatboxes = document.querySelectorAll('input[name="turkeyMeat"]:checked');
    let turkeyMeats = [];
    turkeyMeatboxes.forEach((checkbox) => {
        newObj.turkeyMeat = checkbox.value;
    });
    let mushroomboxes = document.querySelectorAll('input[name="mushroom"]:checked');
    let mushrooms = [];
    mushroomboxes.forEach((checkbox) => {
        newObj.mushroom = checkbox.value;
    });
    let oliveboxes = document.querySelectorAll('input[name="olive"]:checked');
    let olives = [];
    oliveboxes.forEach((checkbox) => {
        newObj.olive = checkbox.value;
    });
    let horseMeatboxes = document.querySelectorAll('input[name="horseMeat"]:checked');
    let horseMeats = [];
    horseMeatboxes.forEach((checkbox) => {
        newObj.horseMeat = checkbox.value;
    });
    let pepperboxes = document.querySelectorAll('input[name="pepper"]:checked');
    let peppers = [];
    pepperboxes.forEach((checkbox) => {
        newObj.pepper = checkbox.value;
    });
    let sausagesboxes = document.querySelectorAll('input[name="sausages"]:checked');
    let sausagess = [];
    sausagesboxes.forEach((checkbox) => {
        newObj.sausages = checkbox.value;
    });

    userArray.push(newObj);
    renderFunction(userArray, $list);
});

let renderFunction = (array, element) => {
    element.innerHTML = null;
    for (let i = 0; i < array.length; i++) {
        element.innerHTML += `
        <li>
        <p>User id: ${array[i + 1].id}</p>
        <p>Name: ${array[i + 1].userName}</p>
        <p>Phone: ${array[i + 1].userPhone}</p>
        <p>Address: ${array[i + 1].userAddress}</p>
        <p>Dough thickness: ${array[i + 1].doughThickness}</p>
        <p>Size: ${array[i + 1].size}</p>
        <p>On Pizza:
        ${array[i + 1].tomato},
        ${array[i + 1].pickledCucumber},
        ${array[i + 1].turkeyMeat},
        ${array[i + 1].mushroom},
        ${array[i + 1].olive},
        ${array[i + 1].horseMeat}
        </p>
        <p>Add:
        ${array[i + 1].pepper},
        ${array[i + 1].sausages}
        </p>
        </li>
        `;
    }
};

//thickness
function thicknessFuncion() {
    let $thickness = document.getElementById('thickness').selectedIndex;
    let options = document.getElementById('thickness').options;
    let thicknessValue = Number(options[$thickness].value)
    let thicknessText = options[$thickness].innerText

}
let thicnessPrice = {
}
function thicknessFunscion() {
    let $thickness = document.getElementById('thickness').selectedIndex;
    let options = document.getElementById('thickness').options;
    let thicknessNone = document.getElementById("thickness__opt--none")
    let thicknessThin = document.getElementById("thickness__opt--thin")
    let thicknessMedium = document.getElementById("thickness__opt--medium")
    let thicknessThick = document.getElementById("thickness__opt--thick")
}

//size
let price25sm = 10;
let price30sm = 12;
let price35sm = 15;

let $size25 = document.querySelector("#size25")
let $size30 = document.querySelector("#size30")
let $size35 = document.querySelector("#size35")

// On Pizz
let $tomato = document.querySelector("#tomato").value;
let $pickledCucumber = document.querySelector("#pickledCucumber").value;
let $turkeyMeat = document.querySelector("#turkeyMeat").value;
let $mushroom = document.querySelector("#mushroom").value;
let $olive = document.querySelector("#olive").value;
let $horseMeat = document.querySelector("#horseMeat").value;
let $onPizza = {
    tomato: 0,
    pickledCucumber: 0,
    turkeyMeat: 0,
    mushroom: 0,
    olive: 0,
    horseMeat: 0,
}
// Add
let $pepper = document.querySelector("#pepper").value;
let $sausages = document.querySelector("#sausages").value;
let $add = {
    pepper: 0,
    sausages: 0,
}

