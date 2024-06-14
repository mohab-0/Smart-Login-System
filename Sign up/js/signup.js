// Variables
var signUpForm = document.getElementById("registerForm");
var signName = document.getElementById("signName")
var nameAlert = document.getElementById("nameAlert")
var signEmail = document.getElementById("signEmail")
var emailAlert = document.getElementById("emailAlert")
var signPassword = document.getElementById("signPassword")
var passwordAlert = document.getElementById("passwordAlert")
var existAlert = document.getElementById('existAlert')
var allUsers = []

// Store Data in Array
if (localStorage.getItem('allUsers') != null) {
    allUsers = JSON.parse(localStorage.getItem('allUsers'))
}



signUpForm.addEventListener('submit', function (e) {
    e.preventDefault()
    if (checkValidation()) {
        addUser()
    }
})


// Input Validation
function validateInput(regex, element, alrtElement) {
    var pattern = regex
    if (pattern.test(element.value)) {
        alrtElement.classList.replace('d-block', 'd-none')
        return true
    }
    else {
        alrtElement.classList.replace('d-none', 'd-block')
        return false
    }

}

// Validation Check
function checkValidation() {
    if (validateInput(/^[0-9A-Za-z]{3,}$/, signName, nameAlert) == true &&
        validateInput(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, signEmail, emailAlert) == true &&
        validateInput(/^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/, signPassword, passwordAlert) == true) {
        existAlert.classList.replace('d-block', 'd-none')
        successAlert.classList.replace('d-none', 'd-block')

        return true;
    } else {
        return false;
    }
}

// Add user
function addUser() {
    var newUser = {
        name: signName.value,
        email: signEmail.value,
        password: signPassword.value
    }
    if (userExist(newUser) == true) {
        existAlert.classList.replace('d-none', 'd-block')
    } else {
        allUsers.push(newUser)
        localStorage.setItem('allUsers', JSON.stringify(allUsers))
    }

}

// Check if User Exist
function userExist(newUser) {
    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email.toLowerCase() == newUser.email.toLowerCase()) {
            existAlert.classList.replace('d-none', 'd-block')
            successAlert.classList.replace('d-block', 'd-none')
            return true;
        }
    }
}