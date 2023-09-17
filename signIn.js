


var form = document.querySelector("form");
form.addEventListener("submit", Login);

var UserData = JSON.parse(sessionStorage.getItem("UserDetails"));

var userName = JSON.parse(sessionStorage.getItem("UserID")) || "";

function Login(e) {
    e.preventDefault();

    const email = form.appleId.value;
    const password = form.password.value;

    if (email == "" || password == "") {
        alert("Please enter your Apple ID and password");
    }
    else if (!UserData) {
        alert("You are not registered Please register");
        window.location.replace('/createId.html');
    }
    else {
        const getUser = UserData.find(function (el) {
            return el.Email === email && el.Password === password;

        })
        if (getUser) {
            console.log(getUser)
            alert("Login Successful");
            sessionStorage.setItem("UserID", JSON.stringify(getUser.FirstName));
            window.location.replace('/index.html');
        }
        else {
            alert("Wrong Password");
        }
    }

}