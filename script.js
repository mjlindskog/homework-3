// Assignment Code
var generateBtn = document.querySelector("#generate");

var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
var numbers = [0,1,2,3,4,5,6,7,8,9];
var letters = "abcdefghijklmnopqrstuvwxyz".split("");
var bigletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
};

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
function generatePassword() {
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var start = confirm("Please answer the following questions to determine your password perameters.");
  if(!start){return};
  // if the user chooses to cacel the intial prompompt the passeord generator process wil be stopped until the butoon is clicked again.
  var passwordLength = parseInt(prompt("How many characters does your password need to be? (Minimum: 8  Maximum: 128"));
  while(passwordLength < 8 || passwordLength > 128){
    passwordLength = parseInt(prompt("You must select a length between 8 - 128 characters"))
  };
  // They cannot fill this promt with anything outside of the numbers 8-128

  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  if(passwordLength >= 8 && passwordLength <= 128) {
    var uppercaseLetters = confirm("Should we include uppercase letters?");
    var lowercaseLeters = confirm("Should we include lowercase letters?");
    var num = confirm("Should we include numbers?");
    var spChar = confirm("Finally, should we inlcude special characters in this password?");
    while(!uppercaseLetters && !lowercaseLeters && !num && !spChar){
      alert("Please select at least one of the catagories ")
    };
    // while loop makes the user select at least one of the criteria options before attmepting to generate a password.
  };

  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected

  // Creating a blank array seemed like the only way I couldmake this work
  var choices = [];

  if (num){
    choices = choices.concat(numbers);
  };
  
  if (uppercaseLetters){
    choices = choices.concat(bigletters);
  };
  
  if (lowercaseLeters){
    choices = choices.concat(letters);
  };
  
  if (spChar){
    choices = choices.concat(special);
  };
  // Originally had a all the possible outcomes listed out in each 'if' condition but then realised they could all the applied to the same variable, overall reduced the lines of could down from well over 100 lines

  var userPassword = [];

  for(i = 0; i < passwordLength; i++){
    userPassword.push(choices[Math.floor(Math.random() * choices.length)]);
  };  
  // using another blank array to to pose as the user password allowed for just one 'for' loop
  return userPassword.join("");
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria

  // passwordText.value = password;
};

// passwordText.value = password;

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

generateBtn.addEventListener("click", writePassword);

// var characterLength = parseInt(passwordLength);