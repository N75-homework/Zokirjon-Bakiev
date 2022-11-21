let $toggleEye = document.querySelector('#toggleEye');
let $inputPassword = document.querySelector('#inputPassword');

$toggleEye.addEventListener('click', function (e) {
    let typeInput = $inputPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    $inputPassword.setAttribute('type', typeInput);
});