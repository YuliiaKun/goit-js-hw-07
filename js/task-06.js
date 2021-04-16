const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', onCheckFocus);

function onCheckFocus(event) {
    validationInput.textContent = event.currentTarget.value;

    if (validationInput.textContent.length === Number(validationInput.getAttribute("data-length"))) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
        return;
    }
    validationInput.classList.replace('valid','invalid');
    
};

console.log(validationInput);