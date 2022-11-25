class ValidationError extends Error {
    constructor(message) {
        super();
        this.message = message;
    }
}


function isValidName(name) {
    const nameRegex = /^[a-zA-Z]+$/;
    if(!nameRegex.test(name)) {
        throw new ValidationError("Please enter a valid name!");
    }
}
  
function isValidEmail(name) {
    const emailRegex = /^[a-zA-Z0-9]{1}[a-zA-Z0-9@._-]+[a-zA-Z]$/;
    if(!emailRegex.test(email)) {
        throw new ValidationError("Please enter a valid email!");
    }
    const necessaryEmailCharacters = ['@','.'];
    for(const necessaryEmailCharacter of necessaryEmailCharacters) {
        if(!email.includes(necessaryEmailCharacter)) {
            throw new ValidationError("Please enter a valid email!");
        }
    }
}

function isValidUsername(username) {
    const usernameRegex = /^[a-zA-Z0-9._]+$/;
    if(!usernameRegex.test(username)) {
        throw new ValidationError("Please enter a valid username!");
    }
}

function isValidPassword(password) {
    if(!password) {
        throw new ValidationError("Password cannot be empty!");
    }
    if(password.length<6) {
        throw new ValidationError("Password length is too short!");
    }
}

function isValidConfirmPassword(password) {
    const currentPassword = document.getElementsByClassName("signup-field--password")[0].value;
    if(password && password !== currentPassword) {
        throw new ValidationError("Passwords did not match!");
    }
}

function isValidDay(day) {
    const dayRegex = /^[0-9]{2}$/;
    if(!dayRegex.test(day)) {
        throw new ValidationError("Please enter a valid day!");
    }
}

function isValidYear(year) {
    const yearRegex = /^[0-9]{4}$/;
    if(!yearRegex.test(year)) {
        throw new ValidationError("Please enter a valid year!");
    }
}

function isValidPhoneNumber(phoneNumber) {
    const FORMATTING_CHARACTERS = ['(',')','-'];
    function isValidFormattedNumber() {
        const regex = /^[0-9(]{1}[0-9)-]+[0-9]$/;
        const hasOpeningParenthesis = phoneNumber.includes("(");
        const hasClosingParenthesis = phoneNumber.includes(")");
        if(hasOpeningParenthesis && !hasClosingParenthesis) {
            return false;
        }
        if(!regex.test(phoneNumber)) {
            throw new ValidationError("Please enter a valid phone number!");
        }
    }
    function isValidNonformattedNumber() {
        const regex = /[0-9]+$/;
        if(!regex.test(phoneNumber)) {
            throw new ValidationError("Please enter a valid phone number!");
        }
    }
    for(const formattingCharacter of FORMATTING_CHARACTERS) {
        if(phoneNumber.includes(formattingCharacter)) {
            return isValidFormattedNumber();
        }
    }
    isValidNonformattedNumber();
}

const validationMapping = {
    "name": isValidName,
    "email": isValidEmail,
    "username": isValidUsername,
    "password": isValidPassword,
    "confirmPassword": isValidConfirmPassword,
    "day": isValidDay,
    "year": isValidYear,
    "phoneNumber": isValidPhoneNumber
};

function validate(event) {
    const inputElement = event.target;
    const field = inputElement.dataset.field;
    if(field = "password") {
        return;
    }
    const errorMessageElement = event.target.parentElement.getElementsByClassName("signup-field-input-error")[0];
    try {
        validationMapping[field](inputElement.value);
        errorMessageElement.innerHTML = '';
        inputElement.classList.remove('signup-field-input--error');
    } catch(err) {
        if(!(err instanceof ValidationError)) {
            throw err;
        }
        errorMessageElement.innerHTML = err.message;
        inputElement.classList.add('signup-field-input--error');
    }
}

const inputs = document.getElementsByClassName("signup-field-input");

class Guide {
    constructor({className, getGuidanceMessage}) {
        this.htmlNode = document.getElementsByClassName(className)[0];
        this.getGuidanceMessage = getGuidanceMessage;
    }

    hide() {
        this.htmlNode.style.display = 'none';
    }

    show() {
        this.htmlNode.style.display = 'block';
    }

    update(val) {
        this.htmlNode.innerHTML = this.getGuidanceMessage(val);
    }
}

const PASSWORD_CATEGORIES = {
    GOOD: "password-good",
    FAIR: "password-fair",
    WEAK: "password-weak"
}

function getPasswordCategory() {
    const hasLettersRegex = /[a-zA-Z]+/;
    const hasNumbersRegex = /[0-9]+/;
    const hasOnlyLettersAndNumbersRegex = /^[a-zA-Z0-9]{6,}$/;

    function isGoodPassword() {
        return hasLettersRegex.test(password) && hasNumbersRegex.test(password) && hasOnlyLettersAndNumbersRegex.test(password);
    }

    function isFairPassword() {
        return hasOnlyLettersAndNumbersRegex.test(password);
    }

    if(isGoodPassword()) {
        return PASSWORD_CATEGORIES.GOOD;
    }
    if(isFairPassword()) {
        return PASSWORD_CATEGORIES.FAIR;
    }
    return PASSWORD_CATEGORIES.WEAK;
}

const passwordGuide = new Guide({
    className: 'signup-field-guide--password',
    getGuidanceMessage: (val) => {
        switch(getPasswordCategory(val)) {
            case (PASSWORD_CATEGORIES.GOOD):
                return 'This password works!';
                break;
            case (PASSWORD_CATEGORIES.FAIR):
                return 'A good password uses a mix of numbers and letters.';
                break;
            case (PASSWORD_CATEGORIES.WEAK):
                return 'Try a longer password.';
        }
        return '';
    }
});

const guideMapping = {
    "password": passwordGuide
};

function showGuide(inputElement) {
    const field = inputElement.dataset.field;
    const guide = guideMapping[field];
    if (!guide) {
      return;
    }
    guide.show();
}

function hideGuide(inputElement) {
    const field = inputElement.dataset.field;
    const guide = guideMapping[field];
    if (!guide) {
        return;
    } 
    guide.hide();
}

function updateGuide(inputElement) {
    const field = inputElement.dataset.field;
    const guide = guideMapping[field];
    if (!guide) {
        return;
    }
    guide.update(inputElement.value);
}

for(const input of inputs) {
    input.onblur = (event) => {
        validate(event.target);
        hideGuide(event.target);
    }
    input.onfocus = (event) => showGuide(event.target);
    input.onkeyup = (event) => updateGuide(event.target);
}