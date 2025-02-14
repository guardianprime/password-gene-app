const btn = document.getElementById("btn");
const copyBtn = document.getElementById("copy-img");
const copyText = document.getElementById("copy-text");
const charLengthEl = document.getElementById("char-length");
const strengthNameEl = document.getElementById("strength-name");
const strengthStatusEl = document.querySelectorAll(".strength-status");
const charLengthInput = document.getElementById("char-length-input");
const passwordInputEl = document.getElementById("password-input");
const checkboxes = document.querySelectorAll("#ul .checkbox");

btn.addEventListener("click", generate);
charLengthInput.addEventListener("change", (e) => {
    charLengthEl.textContent = e.target.value;
});

const passwordStrengthTexts = ["LOW", "MEDIUM", "HIGH", "VERY HIGH"];
let passwordStrengthNumber = 0;

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            passwordStrengthNumber++;
        } else {
            passwordStrengthNumber--;
        }
        updatePasswordStrengthText();
    });
});

function updatePasswordStrengthText() {

    strengthNameEl.textContent = passwordStrengthTexts[passwordStrengthNumber];
}

updatePasswordStrengthText();

let lowercase = "abscdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "123457890";
let symbols = "!@#$%^&*()-_=+[]{}|;:,.<>?";


function generate() {
    const checkboxUppercase = document.getElementById("uppercase").checked;
    const checkboxNumbers = document.getElementById("numbers").checked;
    const checkboxSymbols = document.getElementById("symbols").checked;
    let charLength = parseInt(charLengthInput.value);
    const password = generatePassword(checkboxUppercase, checkboxNumbers, checkboxSymbols, charLength);
    passwordInputEl.value = password;
}

function generatePassword(upper, num, sym, len) {
    let char = lowercase;
    if (upper) char += uppercase;
    if (num) char += numbers;
    if (sym) char += symbols;



    let pass = ""
    for (let i = 0; i < len; i++) {
        const randomIndex = Math.floor(Math.random() * char.length);
        pass += char[randomIndex];
    }

    return pass;
}