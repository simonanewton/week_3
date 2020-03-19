// returns whether length is greater than 8 and at least one character type is selected
function validInputs(length, lowercase, uppercase, numbers, symbols) {
	return ((length >= 8 && length <= 128) && (lowercase || uppercase || numbers || symbols));
}

// prompts user for inputs then validates them, if not valid, repeats prompt
function getUserInputs() {
	var length = prompt("How many characters do you want for your password? (8-128)");
	var lowercase = confirm("Do you want to include lowercase letters?");
	var uppercase = confirm("Do you want to include uppercase letters?");
	var numbers = confirm("Do you want to include numbers?");
	var symbols = confirm("Do you want to include symbols?");

	while (!validInputs(length, lowercase, uppercase, numbers, symbols)) {
		alert("You must choose a length between 8-12 and choose at least one type of character to include.");
		length = prompt("How many characters do you want for your password? (8-128)");
		lowercase = confirm("Do you want to include lowercase letters?");
		uppercase = confirm("Do you want to include uppercase letters?");
		numbers = confirm("Do you want to include numbers?");
		symbols = confirm("Do you want to include symbols?");
	}

	return [length, lowercase, uppercase, numbers, symbols];
}

// returns a random lowercase letter from CharCode
function randomLowercase() {
	return String.fromCharCode(Math.floor((Math.random() * (122 - 97 + 1)) + 97));
}

// returns a random uppercase letter from CharCode
function randomUppercase() {
	return String.fromCharCode(Math.floor((Math.random() * (90 - 65 + 1)) + 65));
}

// returns a random number from CharCode
function randomNumber() {
	return String.fromCharCode(Math.floor((Math.random() * (57 - 48 + 1)) + 48));
}

// returns a random symbol from CharCode
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

// initializes an empty string, then adds characters to it using a randomly selected function based on user inputs
function generatePassword(length, lowercase, uppercase, numbers, symbols) {
	var passwordString = "";

	var includedCharacters = enabledFunctions(lowercase, uppercase, numbers, symbols);

	for (var i = 0; i < length; i++)
		passwordString += includedCharacters[Math.floor(Math.random() * includedCharacters.length)]();

	return passwordString;
}

// creates button variable
var generateBtn = document.querySelector("#generate");

// obtains user inputs then writes password to the #password input
function writePassword() {
	var userInputs = getUserInputs();
	var password = generatePassword(userInputs[0], userInputs[1], userInputs[2], userInputs[3], userInputs[4]);
	var passwordText = document.querySelector("#password");
	passwordText.value = password;
}

// adds event listener to generate button
generateBtn.addEventListener("click", writePassword);