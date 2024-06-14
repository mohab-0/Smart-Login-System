// Variables
var userName = localStorage.getItem('userName')
var logOutBTn = document.getElementById('logOutBtn')

homeUserName.innerHTML = userName;

logOutBTn.addEventListener('click', function () {
    localStorage.removeItem('userName')
})