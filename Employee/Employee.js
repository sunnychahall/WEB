const BASE_URL = "http://localhost:8080/Employee";


// ========================
// SHOW MESSAGE (SMART)
// ========================
function showMessage(msg, type = "success") {

    const box = document.getElementById("message");

    box.innerHTML = msg;

    if (type === "error") {
        box.style.color = "red";
    } else if (type === "warning") {
        box.style.color = "orange";
    } else {
        box.style.color = "green";
    }
}


// ========================
// ADD EMPLOYEE
// ========================
function addEmployee() {

    const emp = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        age: Number(document.getElementById("age").value),
        role: document.getElementById("role").value,
        isActive: document.getElementById("isActive").value === "true",
        salary: Number(document.getElementById("salary").value)
    };

    fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emp)
    })
    .then(async res => {
        const data = await res.json();

        if (!res.ok) {
            throw data;
        }

        return data;
    })
    .then(() => {
        showMessage("Employee added successfully ✅", "success");
        getAllEmployees();
    })
    .catch(err => {

        console.log("ERROR:", err);

        // 🔥 clean readable error
        const msg =
            err?.error?.message ||
            err?.message ||
            "Unknown error occurred";

        showMessage("❌ " + msg, "error");
    });
}


// ========================
// GET ALL EMPLOYEES
// ========================
function getAllEmployees() {

    fetch(BASE_URL)
        .then(res => res.json())
        .then(response => {

            const employees = response?.data;

            const container = document.getElementById("employeeList");
            container.innerHTML = "";

            // ❌ EMPTY DATA CONDITION
            if (!employees || employees.length === 0) {
                showMessage("No employees found", "warning");
                container.innerHTML = "<p style='text-align:center'>Empty List</p>";
                return;
            }

            showMessage("Employees loaded successfully", "success");

            employees.forEach(emp => {

                container.innerHTML += `
                    <div class="employee-card">
                        <b>ID:</b> ${emp.id} <br>
                        <b>Name:</b> ${emp.name} <br>
                        <b>Email:</b> ${emp.email} <br>
                        <b>Age:</b> ${emp.age} <br>
                        <b>Role:</b> ${emp.role} <br>
                        <b>Active:</b> ${emp.active ?? emp.isActive} <br>
                        <b>Salary:</b> ${emp.salary} <br>

                        <button onclick="deleteEmployee(${emp.id})">
                            Delete
                        </button>
                    </div>
                `;
            });

        })
        .catch(err => {
            console.log(err);
            showMessage("❌ Failed to load data from server", "error");
        });
}


// ========================
// DELETE EMPLOYEE
// ========================
function deleteEmployee(id) {

    fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    })
    .then(res => {

        if (!res.ok) {
            throw new Error("Delete failed");
        }

        return res.text();
    })
    .then(() => {
        showMessage("Employee deleted 🗑️", "success");
        getAllEmployees();
    })
    .catch(err => {
        showMessage("❌ Could not delete employee", "error");
    });
}


// AUTO LOAD
window.onload = getAllEmployees;