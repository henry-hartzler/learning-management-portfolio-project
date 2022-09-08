const userEl = document.getElementById("email");
const passEl = document.getElementById("password");
const loginBtn = document.getElementById("loginButton");
userEl.addEventListener('keyup', loginActive);
passEl.addEventListener('keyup', loginActive);
loginBtn.addEventListener('keyup', loginActive);

function loginActive() {
    if (userEl.value.length >= 1 && passEl.value.length >= 1) {
        loginBtn.className = "btn btn-primary form-control";
        loginBtn.removeAttribute("disabled");
    } else {
        loginBtn.className = "btn btn-secondary form-control";
        loginBtn.setAttribute("disabled", "disabled");
    }
}
