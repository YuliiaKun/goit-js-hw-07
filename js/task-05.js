const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', onInputChangeName);

function onInputChangeName(event) {
    outputName.textContent = event.currentTarget.value ? event.currentTarget.value : 'незнакомец';
};