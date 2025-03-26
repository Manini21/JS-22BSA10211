document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const userTableBody = document.getElementById("userTableBody");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get user input values
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const contact = document.getElementById("contact").value.trim();
            const address = document.getElementById("address").value.trim();

            if (!name || !email || !contact || !address) {
                alert("Please fill in all fields.");
                return;
            }

            // Get existing users from localStorage
            let users = JSON.parse(localStorage.getItem("users")) || [];

            // Add new user
            users.push({ name, email, contact, address });

            // Save updated user list to localStorage
            localStorage.setItem("users", JSON.stringify(users));

            // Reset form
            form.reset();

            alert("User Registered Successfully!");
        });
    }

    if (userTableBody) {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        users.forEach(user => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.contact}</td>
                <td>${user.address}</td>
            `;
            userTableBody.appendChild(row);
        });
    }
});
