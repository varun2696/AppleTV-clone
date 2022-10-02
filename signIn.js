


    var form = document.querySelector("form");
    form.addEventListener("submit", Login);

    var UserData = JSON.parse(localStorage.getItem("UserDetails"));

    var userName = JSON.parse(localStorage.getItem("UserID")) || [];

    function Login(e) {
        e.preventDefault();

        if (form.appleId.value == "") {
            alert("Please enter your Apple ID");
        }
        else {
            UserData.forEach(function (el) {
                if (form.appleId.value == el.Email) {
                    alert("Login Successful");

                    userName.push(form.appleId.value);
                    localStorage.setItem("UserID", JSON.stringify(userName));
                }
                else {
                    alert("Wrong Password");
                }
            })
        }

    }