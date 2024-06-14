var loginForm = document.getElementById('loginForm')

var allUsers = []
if (localStorage.getItem('allUsers') != null) {
    allUsers = JSON.parse(localStorage.getItem('allUsers'))
}


loginForm.addEventListener('submit', function (x) {
    x.preventDefault()
    login()
})

function login() {
    var userData = {
        email: signEmail.value,
        password: signPassword.value
    }
    if (loginValidation(userData) == true) {
        console.log("Login Success");
        alertLogin.classList.replace('d-block', 'd-none')
        window.location.href="Home/home.html"
    } else {
        alertLogin.classList.replace('d-none', 'd-block')
    }
}

function loginValidation(userData) {
    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email.toLowerCase() == userData.email.toLowerCase() && allUsers[i].password == userData.password) {
            localStorage.setItem('userName', allUsers[i].name)

            return true
        }
    }
} 