const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


function getName(event) {
   event.preventDefault();
  let theGender = document.getElementById('gender').value;
  let theDate = document.getElementById('date').value;
  
  let findDay = new Date(theDate).getDay();

  if (theGender === "Male"){
    return (`${days[findDay]} is the day you were born and ${maleNames[findDay]} is your Akan name`)
  } else 
  if (theGender === "Female"){
    return (`${days[findDay]} is the day you were born and ${[femaleNames]} is your Akan name`)
  } else {
    return ('You have not selected your gender!')
  }
};

// function displayOutput() {
//   let theOutput = document.getElementById('output');
//   theOutput.innerHTML = analyse();

// }
