const tableBody = document.getElementById("tableBody");
const deptFilter = document.getElementById("deptFilter");
const countDisplay = document.getElementById("countDisplay");

function fetchUsers(sort = "") {

    let dept = deptFilter.value;

    fetch(`/users?sort=${sort}&dept=${dept}`)
        .then(res => res.json())
        .then(data => displayData(data));

    fetchCounts();
}

function displayData(data) {
    tableBody.innerHTML = "";

    data.forEach(user => {
        tableBody.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.dob}</td>
                <td>${user.dept}</td>
                <td>${user.phn}</td>
            </tr>
        `;
    });
}

function fetchCounts() {
    fetch("/count")
        .then(res => res.json())
        .then(data => {
            let text = "Count: ";
            data.forEach(d => {
                text += `${d.dept} (${d.total})  `;
            });
            countDisplay.textContent = text;
        });
}

deptFilter.addEventListener("change", () => fetchUsers());

fetchUsers();
