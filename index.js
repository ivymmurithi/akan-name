let submit = document.querySelector('.button');

let maleNames = [Kwasi, Kwadwo, Kwabena, Kwaku, Yaw, Kofi, Kwame];
let femaleNames = [Akosua, Adwoa, Abenaa, Akua, Yaa, Afua, Ama];
let days = [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday]

function calculate () {
  let theDate = document.getElementById('date').value;
  let theGender = document.getElementById('gender').value;

  let findDay = new Date(theDate).getDay();
  
}