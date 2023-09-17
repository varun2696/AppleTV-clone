

var form = document.querySelector("form");
form.addEventListener("submit", StoreData);

var UserData = JSON.parse(sessionStorage.getItem("UserDetails")) || [];

function StoreData(event) {
    event.preventDefault();

    if (form.first.value == "" || form.last.value == "" || form.dob.value == "" || form.email.value == "" || form.password.value == "") {
        alert("please fill all the fields")
    }
    else {
        var obj = {
            FirstName: form.first.value,
            LastName: form.last.value,
            DOB: form.dob.value,
            Email: form.email.value,
            Password: form.password.value
        };

        UserData.push(obj);
        sessionStorage.setItem("UserDetails", JSON.stringify(UserData));
        // console.log(UserData)
        alert("Apple ID created")
        window.location.replace('./signIn.html')
        // form.reset();

    }
}