

function passLength() {
  // asks for length of password from user. Password must be between 8 and 128 characters
  var passwordLength = prompt('Enter the desired length of your password');
  
  if (passwordLength < 8) {
    alert('Password must be at least 8 characters');
    passLength();
  } else if (passwordLength > 128) {
    alert('Password length cannot exceed 128 characters');
    passLength();
  }
  
  return passwordLength;
}


function typeOfChars() {
  /** asks user for type of characters desired in password. Options include uppercase, 
  * lowercase, numeric, special.
  * returns 'characters', which contains string of list of characters
  */

  var characters = '' //this holds string of list of characters

  var goodInputs = ['yes', 'Yes', 'y', 'Y'];  //these are valid user inputs

  var lower = prompt('Do you wish to include lowercase characters in your password?');
  if (goodInputs.includes(lower)) {
    characters += 'abcdefghijklmnopqrstuvwxyz';
  }

  var upper = prompt('Do you wish to include uppercase characters in your password?');
  if (goodInputs.includes(upper)) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  var numeric = prompt('Do you wish to include numeric characters in your password?');
  if (goodInputs.includes(numeric)) {
    characters += '1234567890';
  }
  
  var special = prompt('Do you wish to include special characters in your password?');
  if (goodInputs.includes(special)) {
    characters += '`~!@#$%^&*()-_+=/{}[]|?<>,.:;'
  }

  return characters;
}


function randomChar(characterString) {
  /** Function creates a random character and returns that character.
  * Takes argument 'characterString' which is string of characters returned from typeOfChars function
  */

  // get random character from var characters
  var randomChar = characterString[Math.floor(Math.random() * characterString.length)]

  return randomChar;
}


function assemblePassword(characterString) {
  /** function creates a password of random characters and assembles it */

  var passwordLength = passLength();
  var password = '';

  for (var i = 0; i < passwordLength; i++) {
    var tempCharacter = randomChar(characterString);  // creates tempCharacter by executing randomChar()
    password += tempCharacter
  }
  
  //console.log(`Current password: ${password}`);
  
  return password;
}


function generatePassword() {
  /** Main function which goes through all steps to generate password
   * and pass value to the #password <textarea> tag in index.html file */
  
  //1. Create characterString that will be used to generate random characters
  var characterString = typeOfChars()
  if (characterString.length == 0) {
    alert('You must choose at least one type of character');
    var characterString = typeOfChars();  //need to hold result in variable characterString
  }

  //2. Assembles password by grabbing random characters from characterString
  var password = assemblePassword(characterString);
  
  //3. Select id='password' attribute from index.html
  var passwordText = document.querySelector("#password");

  //4. Set value of passwordText to password
  passwordText.value = password;
}


// Add event listener to generate button
var generateBtn = document.querySelector("#generate");  //returns the first element in the document that matches the specified selector. Basically, this grabs the 'Generate Password' button;
generateBtn.addEventListener("click", generatePassword);  // upon click, executes writePassword function. But why doesn't writePassword need ()?
