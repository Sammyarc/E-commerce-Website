document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("LogInForm");
    const userField = loginForm.querySelector('.user');
    const userInput = userField.querySelector('.username');
    const passField = loginForm.querySelector('.user-password');
    const passInput = passField.querySelector('.password');

    
    const passwordInput = document.getElementById("password");
    const showPasswordIcon = document.getElementById("showPassword");

    showPasswordIcon.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            showPasswordIcon.classList.remove("bxs-hide");
            showPasswordIcon.classList.add("bxs-show");
        } else {
            passwordInput.type = "password";
            showPasswordIcon.classList.remove("bxs-show");
            showPasswordIcon.classList.add("bxs-hide");
        }
    });

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(u => u.username === userInput.value && u.password === passInput.value);

        if (user) {
            let btn = document.querySelector('.lbutton');
                spinIcon = document.querySelector('.spinner');
                btnText = document.querySelector(".btn-text");

                btn.classList.add('checked');
                spinIcon.classList.add('spin');
                btnText.textContent = "Authenticating...";

                // Redirect after 3 seconds
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 5000);
        } else {
            passField.classList.add("invalid");
        }
    });
});

