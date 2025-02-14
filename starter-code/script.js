const btn = document.getElementById("btn");
const copyBtn = document.getElementById("copy-img");
const copyText = document.getElementById("copy-text");
const charLengthEl = document.getElementById("char-length");
const charlengthInput = document.getElementById("char-length-input").value;
const checkboxUppercase = document.getElementById("uppercase").checked;
const checkboxLowercase = document.getElementById("lowercase").checked;
const checkboxNumbers = document.getElementById("numbers").checked;
const checkboxSymbols = document.getElementById("symbols").checked;
const strengthStatusEl = document.querySelectorAll(".strength-status");


btn.addEventListener("click", generatePassword);
charlengthEl.textContent = charLengthInput;

let lowercase = "abscdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "123457890";
let symbols = "!@#$%^&*()-_=+[]{}|;:,.<>?";


function generatePassword() {
    let char = lowercase;
    if (checkboxUppercase) char += uppercase;
    if (checkboxNumbers) char += numbers;
    if (checkboxSymbols) char += symbols;

    let pass = "";

    for (let i = 0; i < charLengthInput; i++){
        const randomIndex = Math.floor(Math.random() * char.length);
        pass += char[randomIndex];
        }
        console.log(pass);


}