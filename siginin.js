alert("'${name} ${surname}', nice to see you")

const email = document.getElementsByName("email")[0];
const password = document.getElementsByName("password")[0];

form.onsubmit = (e) => {
    e.preventDefault();
    console.log(email.value, password.value);
  };

if(someField.length < 1) {
    alert("Будь ласка заповніть поле")
}

