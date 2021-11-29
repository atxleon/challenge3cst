// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmNumberic;
var confirmUpper;
var confirmLower;
var confirmSpecialcharacters;

var passwordLength = (8-128);
var confirmLower = (a-z);
var confirmUpper = (A-Z);
var confirmNumberic = (0-9);
var confirmSpecialcharacters = (U+0020-U+007E);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
console.log("Password length " + passwordLength);

if(passwordLength) {
  alert("Required value");

} else if (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("You must choose between 8 and 128");
  console.log("Password length " + passwordLength);

} else { 
  confirmNumberic = confirm("Will this contain numbers?");
  console.log("Number " + confirmNumberic);
  confirmUpper = confirm("Will this contain upper case letters?");
  console.log("Upper case " + confirmUpper);
  confirmLower = confirm("Will this contain lower case letters?");
  console.log("Lower case " + confirmLower);
  confirmSpecialcharacters = confirm("Will this contain special characters?");
  console.log("Special Character " + confirmSpecialcharacters);
}