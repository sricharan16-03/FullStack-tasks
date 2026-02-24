document.getElementById("form1").addEventListener("submit", function (e) {
    e.preventDefault();  
    register();
});

function register() {

    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("DOB").value;
    const dept = document.getElementById("dept").value;
    const phn = document.getElementById("number").value;
    const resPara = document.getElementById("result");

    if (!name || !email || !dob || !dept || !phn) {
        resPara.innerText = "All fields are required";
        resPara.style.color = "red";
        return;
    }

    fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, dob, dept, phn })
    })
    .then(response => response.json())
    .then(data => {
        resPara.innerText = data.message;
        resPara.style.color = "green";
        document.getElementById("form1").reset();
    })
    .catch(error => {
        console.error(error);
        resPara.innerText = "Error connecting to server";
        resPara.style.color = "red";
    });
}
