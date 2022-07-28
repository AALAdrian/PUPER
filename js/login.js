var form = document.getElementById('login');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("working");
    var username = document.getElementById('nameInput').value;
    var password = document.getElementById('signupPass').value;
    var checking = validLogin(username, password);
    if (checking == true) {
        alert('Login Successful!');
        window.location = "homepage.html";
    }
    else {
        document.getElementById('check').innerHTML = "<p>Invalid Input. Wrong Username or Password</p>"
    }
});