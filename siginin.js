const email = document.getElementsByName("email")[0];
const password = document.getElementsByName("password")[0];
const surename = document.getElementsByName("surename")[0];
const name = document.getElementsByName("name")[0];

form.onsubmit = (e) => {
    e.preventDefault();
    console.log(email.value, password.value);
  };

function someField(name) {
    if(someField.length < 4) {
      alert("Будь ласка введіть довше ім'я")
    }
    else {
        alert("'${name} ${surname}', nice to see you")
      }
}

function someField(surename) {
  if(someField.length < 4) {
    alert("Будь ласка введіть довше прізвище")
  }
  else {
      alert("'${name} ${surname}', nice to see you")
    }
}

function someField(password) {
  if (someField.length < 7) {
    alert("Будь ласка введіть правильний пароль довжина якого має бути 8, або більше");
  }
  else {
    alert("'${name} ${surname}', nice to see you")
    }
}




 


