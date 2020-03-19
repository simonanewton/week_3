
// validates user inputs so that at least one variable is selected
function validateInputs() {
}

// returns a random lowercase letter from Char Code
function randomLowerCase() {
    return String.fromCharCode(Math.floor((Math.random() * (122 - 97)) + 97));
}

// returns a random uppercase letter from Char Code
function randomUpperCase() {
    return String.fromCharCode(Math.floor((Math.random() * (90 - 65)) + 65));
}

// returns a random number from Char Code
function randomNumber() {
    return String.fromCharCode(Math.floor((Math.random() * (57 - 48)) + 48));
}

// returns a random symbol from Char Code
function randomSymbol() {
    return String.fromCharCode(Math.floor((Math.random() * (47 - 32)) + 32));
}

// initializes an empty string, then adds characters to it using a randomly selected function
function assemblePassword(passwordMaxLength) {
    var passwordString = "";
	var passwordMinLength = 8;
	var randomFunction = [randomLowerCase, randomUpperCase, randomNumber, randomSymbol];
    for (var i=0; i < (Math.floor(Math.random() * (passwordMaxLength - passwordMinLength) + passwordMinLength)); i++) {
        passwordString += randomFunction[Math.floor(Math.random() * randomFunction.length)];
    }
    return passwordString;
}

// validates inputs from the user, then returns the randomly assembled password
function generatePassword(length) {
	validateInputs;
    return assemblePassword(length);
}


//-------------------------------------------------------
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");
	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);