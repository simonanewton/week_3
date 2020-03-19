// string variables
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

function validateInputs() {
  // ???
}

function checkInputs() {
  // ???
}

function assemblePassword() {
  // ???
}

function generatePassword() {
  // validate inputs
  validateInputs;

  // check for individual inputs
  checkInputs;

  // assemble and return password string
  return assemblePassword;
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