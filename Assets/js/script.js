// Assignment Code
var generateBtn = document.querySelector("#generate");

passLow = "abcdefghijklmnopqrstuvwxyz";
passHigh = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
passNum = "0123456789";
passChar = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";

// Write password to the #password input
function writePassword() {
  var makePass = window.confirm("Would you like to generate a password? Click OK to continue.");

  if (makePass) {
    var passLength = window.prompt("How long would you like your password to be? Pick a number from 8 to 128.");
    var passLengthNum = parseInt(passLength);
    while (passLength < 8 || passLength > 128) {
      var passLength = window.prompt("Please pick a number from 8 to 128.");
      var passLengthNum = parseInt(passLength);
    }
    if (passLength) {
      var lowerCase = window.confirm("Would you like at least one lowercase character? OK for yes, Cancel for no.");
      if (!lowerCase) {
        var passContent = "";
      }
      else {
        var passContent = passLow;
      }
      var upperCase = window.confirm("Would you like at least one uppercase character? OK for yes, Cancel for no.");
      if (upperCase) {
        var passContent = passContent + passHigh;
      }
      var incNum = window.confirm("Would you like at least one number? OK for yes, Cancel for no.");
      if (incNum) {
        passContent = passContent + passNum;
      }
      var incChar = window.confirm("Would you like at least one special character? OK for yes, Cancel for no.");   
      if (incChar) {
        passContent = passContent + passChar;
      }
    }
    window.alert(passContent);
  }
  else {
    window.alert("Click 'Generate Password' if you change your mind!");
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
