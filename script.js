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
	var ascii_high = 122;
	var ascii_low = 97;
	return String.fromCharCode(Math.floor((Math.random() * (ascii_high - ascii_low + 1)) + ascii_low));
}

// returns a random uppercase letter from CharCode
function randomUppercase() {
	var ascii_high = 90;
	var ascii_low = 65;
	return String.fromCharCode(Math.floor((Math.random() * (ascii_high - ascii_low + 1)) + ascii_low));}

// returns a random number from CharCode
function randomNumber() {
	var ascii_high = 57;
	var ascii_low = 48;
	return String.fromCharCode(Math.floor((Math.random() * (ascii_high - ascii_low + 1)) + ascii_low));}

// returns a random symbol from CharCode
function randomSymbol() {
	var ascii_high = 47;
	var ascii_low = 32;
	return String.fromCharCode(Math.floor((Math.random() * (ascii_high - ascii_low + 1)) + ascii_low));}

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
	var includedCharTypes = enabledFunctions(lowercase, uppercase, numbers, symbols);
	
	for (var i = 0; i < length; i++) {
		var randomCharacter = includedCharTypes[Math.floor(Math.random() * includedCharTypes.length)]();
		passwordString += randomCharacter;
	}

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