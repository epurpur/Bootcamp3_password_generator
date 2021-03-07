
// Get user inputs

// ask for length of password
function passLength() {
  // asks for length of password from user
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


// ask for type of characters desired in password
function typeOfChars() {
  // asks user for type of characters desired in password. Options include uppercase, lowercase, numeric, special.
  // returns 'characters', which contains string of list of characters
  
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

/////////////////////////////START HERE
var characterString = typeOfChars()

function randomChar(characterString) {
  // Function creates a random character and returns that character.
  // Takes argument 'characters' which is string of characters from typeOfChars function

  // get random character from var characters
  var randomChar = characterString[Math.floor(Math.random() * characterString.length)]

  return randomChar;
}


function generatePassword() {
  // function generates a password of random characters
  var passwordLength = passLength();

  var password = []

  for (var i = 0; i < passwordLength; i++) {
    var tempCharacter = randomChar(characterString);  // creates tempCharacter by executing randomChar()
    password.push(tempCharacter);    // push character to password array
  }
  password = password.join('')   // join characters in fullPassword array into single string
  
  console.log(`Current password: ${password}`);
  
  return password;
}


function writePassword() {
  // Write password to the #password input
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");  //returns the first element in the document that matches the specified selector. Basically, this grabs the 'Generate Password' button;
generateBtn.addEventListener("click", writePassword);  // upon click, executes writePassword function. But why doesn't writePassword need ()?
