// name variables
var firstName;
var middleName;
var lastName;

// btn1 .getElementById
var btn = document.getElementById('first');
btn.addEventListener('click', function(event){
  letters(event.target.id);
});

//middle name target when btn clicked
document.getElementById('middle').addEventListener('click', function(event){
  letters(event.target.id);
});

//last name targeted when btn clicked
document.getElementById('last').addEventListener('click', function(event){
  letters(event.target.id);
});

// btn2 .getElementsByTagName
var links = document.getElementsByTagName('button');
  console.log(links);
  window.addEventListener('keypress', function(name){
    console.log(name);
  });

// btn3 .querySelector
  var oneLink = document.querySelector('ul li:last-child #last');
    console.log(oneLink);

// function capitalizes first letter and lowercase for rest of letters
function letters(idName) {
  var name = prompt('What is your name?');
  name = name[0].toUpperCase() + name.substr(1).toLowerCase();
  if(idName === 'first') {
    firstName = name;
  } else if(idName === 'middle') {
    middleName = name;
  } else {
    lastName = name;
  }

// alert that displays full name
  if(firstName && middleName && lastName) {
    alert('Your name is ' + firstName + ' ' + middleName + ' ' + lastName);
  }
}
