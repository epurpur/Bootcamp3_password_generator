This homework is a random password generator. This combines a simple user interface with input received from the user. The page does the following:

-When user clicks 'generate password' button, prompt() pops up asking if user wants to include:
* lowercase characters
* uppercase characters
* numeric characters
* special characters (ie: $%^& etc...)

-A final prompt comes asking for password length. Password must be between 8 and 128 characters.

Behind the scenes in 'script.js', here is my workflow:

I have an event listener attached to the #generate button. When clicked, it runs a function createPassword() which executes the rest.

First, I need to have a character string from which to choose random characters. This executes a function typeOfChars which, depending on user input, puts lowercase, uppercase, numeric, and special characters into a string and returns them. The user must select at least one of these groups of characters.

Next, the function generatePassword() executes. This does several things.
* gets password length from user input
* gets random character x number of times using randomChar() function with the characterString of user chosen characters as input.
* join all the random characters into a string which is the final password

Then, we use a query selector to choose the <textarea> tag with id of 'password' in index.html file.

Lastly, we store the value of the password into that selected element and it is displayed on the screen.
