const uInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

const checkPalindrome = (input) => {
    const originalInput = input;

    if (input === '') {
        alert('Please input a value');
        return;
    }

    result.replaceChildren();

    const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    let resultMessage = `${originalInput} ${
        lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
    } a palindrome`;

    const pElement = document.createElement('p');
    pElement.innerHTML = resultMessage;
    result.appendChild(pElement);

    result.classList.remove('hidden'); 
}
checkBtn.addEventListener('click', () => {
    checkPalindrome(uInput.value);
    uInput.value = '';
});