// name variables
var firstName;
var middleName;
var lastName;

// id "first": .getElementById, event listener click and target when btn clicked
var btn = document.getElementById('first');
btn.addEventListener('click', function(event){
  letters(event.target.id);
});

// id "middle": event listener click and target when btn clicked
document.getElementById('middle').addEventListener('click', function(event){
  letters(event.target.id);
});

// id "last": event listener click and target when btn clicked
document.getElementById('last').addEventListener('click', function(event){
  letters(event.target.id);
});

// id "middle" .getElementsByTagName
var links = document.getElementsByTagName('button');
  console.log(links);

// id "last" .querySelector
  var oneLink = document.querySelector('ul li:last-child #last');
    console.log(oneLink);

// function capitalizes first letter and lowercase for rest of letters
function letters(idName) {
  var name = prompt(`What is your ${idName} name?`);
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
