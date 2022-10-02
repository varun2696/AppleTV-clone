

var form = document.querySelector("form");
form.addEventListener("submit", StoreData);

var UserData = JSON.parse(localStorage.getItem("UserDetails")) || [];

function StoreData() {
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
        localStorage.setItem("UserDetails", JSON.stringify(UserData));
        // console.log(UserData)
        alert("Apple ID created")

    }
}