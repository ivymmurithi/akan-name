const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


function getName() {
  let theGender = document.getElementById('gender').value;
  let theDate = document.getElementById('date').value;
  
  let findDay = new Date(theDate).getDay();
  
  if (findDay < 0 || findDay > 6 || findDay === null || isNaN(findDay)) {
    displayOutput ("Choose a date!");
    return;
  }
  
  if (theGender === "Male"){
    displayOutput (`${days[findDay]} is the day you were born and ${maleNames[findDay]} is your Akan name`)
  } else 
  if (theGender === "Female"){
    displayOutput (`${days[findDay]} is the day you were born and ${femaleNames[findDay]} is your Akan name`)
  } else {
    displayOutput ('Select your gender!')
  }
};

function displayOutput(sentence) {
  let theOutput = document.getElementById('output');
  theOutput.innerHTML = sentence;
}
