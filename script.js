// validates user inputs so that at least one variable is selected
function validInputs(length, lowercase, uppercase, numbers, symbols) {
	return ((length >= 8 && length <= 128) && (lowercase || uppercase || numbers || symbols));
}

// returns a random lowercase letter from Char Code
function randomLowercase() {
	return String.fromCharCode(Math.floor((Math.random() * (122 - 97 + 1)) + 97));
}

// returns a random uppercase letter from Char Code
function randomUppercase() {
	return String.fromCharCode(Math.floor((Math.random() * (90 - 65 + 1)) + 65));
}

// returns a random number from Char Code
function randomNumber() {
	return String.fromCharCode(Math.floor((Math.random() * (57 - 48 + 1)) + 48));
}

// returns a random symbol from Char Code
function randomSymbol() {
	return String.fromCharCode(Math.floor((Math.random() * (47 - 32 + 1)) + 32));
}

// returns an array of functions chosen based on user inputs
function enabledFunctions(lowercase, uppercase, numbers, symbols) {
	var enabledFunctionsArray = [];

	if (lowercase) enabledFunctionsArray.push(randomLowercase);
	if (uppercase) enabledFunctionsArray.push(randomUppercase);
	if (numbers) enabledFunctionsArray.push(randomNumber);
	if (symbols) enabledFunctionsArray.push(randomSymbol);
	
	return enabledFunctionsArray;
}

// initializes an empty string, then adds characters to it using a randomly selected function
function generatePassword(length, lowercase, uppercase, numbers, symbols) {
	var passwordString = "";

	var includedCharacters = enabledFunctions(lowercase, uppercase, numbers, symbols);

	for (var i=0; i < length; i++) {
		passwordString += includedCharacters[Math.floor(Math.random() * includedCharacters.length)]();
	}

	return passwordString;
}


// TO DO:
// - modify HTML/CSS files to accept user character inputs
// - convert user inputs to (length, lowercase, uppercase, numbers, symbols) values



//-------------------------------------------------------
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var length = 12;
	var lowercase = true;
	var uppercase = true;
	var numbers = true;
	var symbols = true;

	console.log(validInputs(length, lowercase, uppercase, numbers, symbols));

	var password = generatePassword(length, lowercase, uppercase, numbers, symbols);
	var passwordText = document.querySelector("#password");
	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);