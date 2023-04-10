/* const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const signupBtn = document.getElementById("signup-btn");

const checkUsername = () => {
    let valid = false;
    const min = 2;
    const max = 50;
    const usernameValue = username.value.trim();

    if(usernameValue.length >= min && usernameValue.length <= max) {
        document.getElementById("username-error").innerHTML = "";
        valid = true;
    } else if(usernameValue.length < min) {
        document.getElementById("username-error").innerHTML = `Username must be at least ${min} characters`;
    } else if(usernameValue.length > max) {
        document.getElementById("username-error").innerHTML = `Username must be less than ${max} characters`;
    } else {
        document.getElementById("username-error").innerHTML = "Username is required";
    }
};

const checkEmail = () => {
    let valid = false;
    const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(emailRegex.test(email.value)) {
        document.getElementById("email-error").innerHTML = "";
        valid = true;
    } else if(!emailRegex.test(email.value)) {
        document.getElementById("email-error").innerHTML = "Email is not valid";
    } else {
        document.getElementById("email-error").innerHTML = "Email is required";
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;
    const min = 8;
    const passwordValue = password.value.trim();

    if(passwordValue.length >= min) {
        document.getElementById("password-error").innerHTML = "";
        valid = true;
    } else if(passwordValue.length < min) {
        document.getElementById("password-error").innerHTML = `Password must be at least ${min} characters`;
    } else {
        document.getElementById("password-error").innerHTML = "Password is required";
    }
    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;

    if(confirmPassword.value === password.value) {
        document.getElementById("confirm-password-error").innerHTML = "";
        valid = true;
    } else {
        document.getElementById("confirm-password-error").innerHTML = "Passwords do not match";
    }
    return valid;
};

const checkForm = () => {
    let valid = true;
    if(!checkUsername()) {
        valid = false;
    }
    if(!checkEmail()) {
        valid = false;
    }
    if(!checkPassword()) {
        valid = false;
    }
    if(!checkConfirmPassword()) {
        valid = false;
    }

    if(valid) {
        signupBtn.disabled = false;
        signupBtn.style.marginRight = "0px";
    } else {
        signupBtn.disabled = true;
        signupBtn.style.marginRight = "100px";
    }
};

username.addEventListener("keyup", checkUsername);
email.addEventListener("keyup", checkEmail);
password.addEventListener("keyup", checkPassword);
confirmPassword.addEventListener("keyup", checkConfirmPassword);
signupBtn.addEventListener("click", checkForm); */

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const signupBtn = document.getElementById("signup-btn");

const checkUsername = () => {
    let valid = false;
    const min = 2;
    const max = 50;
    const usernameValue = username.value.trim();

    if(usernameValue.length >= min && usernameValue.length <= max) {
        document.getElementById("username-error").innerHTML = "";
        valid = true;
    } else if(usernameValue.length < min) {
        document.getElementById("username-error").innerHTML = `Username must be at least ${min} characters`;
    } else if(usernameValue.length > max) {
        document.getElementById("username-error").innerHTML = `Username must be less than ${max} characters`;
    } else {
        document.getElementById("username-error").innerHTML = "Username is required";
    }
    
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(emailRegex.test(email.value)) {
        document.getElementById("email-error").innerHTML = "";
        valid = true;
    } else if(!emailRegex.test(email.value)) {
        document.getElementById("email-error").innerHTML = "Email is not valid";
    } else {
        document.getElementById("email-error").innerHTML = "Email is required";
    }
    
    return valid;
};

const checkPassword = () => {
    let valid = false;
    const min = 8;
    const passwordValue = password.value.trim();

    if(passwordValue.length >= min) {
        document.getElementById("password-error").innerHTML = "";
        valid = true;
    } else if(passwordValue.length < min) {
        document.getElementById("password-error").innerHTML = `Password must be at least ${min} characters`;
    } else {
        document.getElementById("password-error").innerHTML = "Password is required";
    }
    
    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;

    if(confirmPassword.value === password.value) {
        document.getElementById("confirm-password-error").innerHTML = "";
        valid = true;
    } else {
        document.getElementById("confirm-password-error").innerHTML = "Passwords do not match";
    }
    
    return valid;
};

const checkForm = () => {
    let valid = true;
    if(!checkUsername()) {
        valid = false;
    }
    if(!checkEmail()) {
        valid = false;
    }
    if(!checkPassword()) {
        valid = false;
    }
    if(!checkConfirmPassword()) {
        valid = false;
    }

    if(valid) {
        signupBtn.disabled = false;
        signupBtn.style.marginRight = "0px";
    } else {
        signupBtn.disabled = true;
        signupBtn.style.marginRight = "100px";
    }
};

username.addEventListener("keyup", checkForm);
email.addEventListener("keyup", checkForm);
password.addEventListener("keyup", checkForm);
confirmPassword.addEventListener("keyup", checkForm);
signupBtn.addEventListener("click", checkForm);