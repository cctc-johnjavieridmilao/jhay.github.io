/*
let seeBtn = document.querySelector('#see');
let showname = document.querySelector('#show');
let name = ['JHAYJHAY', 'CLARISE', 'REGGIE'];

seeBtn.addEventListener('click', function() {
  let inputNames = document.querySelector('#names').value.toUpperCase();
  let found = name.find(n => n === inputNames);
  if (found) {
    showname.innerHTML = `${inputNames.toLowerCase()}`;
    document.querySelector('#names').value = '';
  } else {
    document.querySelector('#names').value = '';
    showname.innerHTML = 'Not Found Pleas try Again';
  }
});

showname.addEventListener('click', function() {
  let index = name.indexOf(
    document.querySelector('#show').textContent.toLocaleUpperCase()
  );
  if (index > -1) {
    name.splice(index, 1);
    document.querySelector('#show').remove();
    console.log(name);
  }
});

const btn = document.querySelector('.btn');
btn.addEventListener('click', function(e) {
  e.preventDefault();
  let name = document.querySelector('#name');
  let email = document.querySelector('#email');
  let name_error = document.querySelector('#name_error');
  let email_error = document.querySelector('#email_error');
  if (name.value == '') {
    name.style.border = '1px solid red';
    name_error.textContent = 'Name is required';
    name_error.style.color = 'red';
  } else {
    name.style.border = '1px solid #ccc';
    name_error.textContent = '';
  }
  if (email.value == '') {
    email.style.border = '1px solid red';
    email_error.style.color = 'red';
    email_error.textContent = 'Email is Required';
  } else {
    email.style.border = '1px solid #ccc';
    email_error.textContent = '';
  }
});
*/

const form = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const UsersList = document.querySelector('#users');
const msg = document.querySelector('.msg');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (name.value === '' || email.value === '') {
    msg.style.display = 'block';
    msg.classList.add('error');
    msg.innerHTML = '<strong>Please fill in all fields</strong>';
    setTimeout(() => {
      msg.style.display = 'none';
    }, 2000);
  } else {
    const li = document.createElement('li');
    li.appendChild(
      document.createTextNode(`Name : ${name.value} | Email : ${email.value}`)
    );
    UsersList.appendChild(li);
  }
});


window.addEventListener('load', function () {
  let HttpRequest = new XMLHttpRequest();
  HttpRequest.open('GET', 'data.json');
  HttpRequest.addEventListener('load', function () {
    let showData = document.querySelector('#users');
    let user = JSON.parse(this.responseText);
    user.forEach((responce) => {
      const li = document.createElement('li');
      li.appendChild(
        document.createTextNode(`${responce.id}. ${responce.name}`)
      );
      showData.appendChild(li);
    })
  })
  HttpRequest.send();
})

/*
function SetUsername() {
  let myName = prompt('Enter your name');
  localStorage.setItem('name', myName);
}
if (!localStorage.getItem('name')) {
  SetUsername();
} else {
  let name = localStorage.getItem('name');
  alert(`Hi ${name}`)
}
*/

/*
let btnRand = document.querySelector('#rand');
btnRand.onclick = function (e) {
  let randomNumber = Math.floor(Math.random() * 8.5);
  console.log(randomNumber);
}
*/

/*
let uname = "clarise";
let capital = uname.slice(0, 1);
let res = uname.replace(capital, capital.toUpperCase());
console.log(res);
*/

/*
let letter = "MAN675847583748sjt567654;Manchester Piccadilly";
let code = letter.slice(0, 3);
let Semi = letter.indexOf(';');
let names = letter.slice(Semi + 1);
console.log(`${code} : ${names}`);
*/

/*
let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(',');

myArray.forEach((res) => {
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(res));
  UsersList.appendChild(li);
})

*/

/*
var products = ['Underpants:6.99',
  'Socks:5.99',
  'T-shirt:14.99',
  'Trousers:31.99',
  'Shoes:23.99'
];

for (var i = 0; i < products.length; i++) {
  var subArray = products[i].split(':');
  var names = subArray[0];
  var price = Number(subArray[1]);
  console.log(subArray);
}
*/