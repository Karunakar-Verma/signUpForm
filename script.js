const form = document.getElementById('form');
const username = document.getElementById('UserName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm');


const error1 = document.getElementById('error1')
const error2 = document.getElementById('error2')
const error3 = document.getElementById('error3')
const error4 = document.getElementById('error4')

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*])[A-Za-z\d@#$%^&*]{8,24}$/;


// Checking Username

function checkUsername() {
    if (username.value.trim() === "") {
        error1.textContent = "Username is required";
        return false;
    } 

    else if (username.value.length < 8) {
        error1.textContent = "Username should be greater than 8 characters.";
        return false; 
    } 
    else {
        error1.textContent = ""; 
        return true;
    }
}



// Checking Email 

function checkEmail()
{
    if(!emailPattern.test(email.value))
    {
        error2.textContent = "Enter valid email id."
        return false;
    }
    else{
        error2.textContent = ""
        return true;
    }
}

// Checking password

function checkPassword()
{
    if(!passwordPattern.test(password.value))
    {
        error3.textContent = "Password must be 8-24 characters, with at least 1 uppercase, 1 lowercase, 1 special character and 1 number";
        return false;
    }
    else{
        error3.textContent = "";
        return true;
    }
}

// Checking Confirm password

function checkConfirmPassword()
{
    if(confirmPassword.value != password.value)
    {
        error4.textContent = "Passwords do not match";
        return false;
    }
    else{
        error4.textContent = ""
        return true;
    }
}

username.addEventListener('input',checkUsername );
email.addEventListener('input', checkEmail);
password.addEventListener('input', checkPassword);
confirmPassword.addEventListener('input', checkConfirmPassword);


form.addEventListener('submit', function(event) {
   
    if (username.value.trim() === "" && email.value.trim() === "" && password.value.trim() === "" && confirmPassword.value.trim() === "") {
        alert("Please fill all the sections."); 
        event.preventDefault();
    } else if (!checkUsername() || !checkEmail() || !checkPassword() || !checkConfirmPassword()) {
        event.preventDefault();
    }
});
