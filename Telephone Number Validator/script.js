const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

check.addEventListener('click', e => {
    e.preventDefault();
    const number = input.value;

    if (number === "") {
        alert("Please provide a phone number");
        return;
    }

    const isValid = validateNumber(number);
    const message = isValid 
        ? `Valid US number: ${number}`
        : `Invalid US number: ${number}`;
    result.innerText = message;
});

clear.addEventListener("click", () => {
    result.innerHTML = '';
});

const validateNumber = (number) => {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?(\d{3})[\s-]?(\d{4})$/;
    const regexSpaces = /^(1\s?)?(\d{3}|\(\d{3}\))(\s|-)?\d{3}(\s|-)?\d{4}$/;
    return regex.test(number) || regexSpaces.test(number);
};