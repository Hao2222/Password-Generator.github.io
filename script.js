//A variable for each Id is created here
var thePassword = document.getElementById("results");
var passwordLength = document.getElementById("length");
var myNumber = document.getElementById("number");
var myLowerCase = document.getElementById("lowercase");
var myUpperCase = document.getElementById("uppercase");
var myCharacter = document.getElementById("character");
var pwdCreate = document.getElementById("generate");

//This code block is for the events clicked by user. The user chooses the password preferences here.
pwdCreate.addEventListener('click', () =>{
    var length = passwordLength.value;
    var chooseUpper = myUpperCase.checked;
    var chooseLower = myLowerCase.checked;
    var chooseNumber = myNumber.checked;
    var chooseCharacter = myCharacter.checked;
   
   //The password preferences are grouped together and this gets updated in the html 'results' using innerText
    thePassword.innerText = createPassword(chooseUpper, chooseLower, chooseNumber, chooseCharacter, length);
   });

//This function randomly selects an upper case letter form A to Z
function selectUpperCase(){
return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
//This function randomy selects a lower case letter from a to z
function selectLowerCase(){
return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
//This function randomly selects a number from 0 to 9
function selectNumber(){
return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
//This function randomly selects a special character
function selectCharacter(){
var character = "!@#$%^&*()";
return character[Math.floor(Math.random()*character.length)];
}

//This code block represents a set of random generated items in the password
var randomItems = {
 uppercase : selectUpperCase,
 lowercase : selectLowerCase,
 number : selectNumber,
 character : selectCharacter
};

//The function below will combine the random generated items to form a complete password
function createPassword(uppercase, lowercase, number, character, length){
 let createdPassword = "";

 //If the password is empty or zero length, then do nothing
 if(createPassword.length === 0) {
 return;
}

//This creates an array of characters for the password
 var createArray = [{uppercase}, {lowercase}, {number}, {character}].filter(item => Object.values(item)[0]);

 //This will generate the password that has the length specified
 for(let i=0; i<length; i+=createPassword.length) {
     createArray.forEach(type => {
         let passName = Object.keys(type)[0];
         createdPassword += randomItems[passName]();
     });
     
 }
 return createdPassword.slice(0, length);
  }

