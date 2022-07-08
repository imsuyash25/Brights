const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});
const u_name = document.getElementById('u_name');
const pass = document.getElementById('pass');
const login_btn = document.getElementById('log_btn');
const sign_btn = document.getElementById('sign_btn');
const sign_u_name = document.getElementById('sign_u_name');
const sign_u_email = document.getElementById('sign_u_email');
const sign_u_pass = document.getElementById('sign_u_pass');
const err = document.getElementById('error');
sign_btn.addEventListener('click', () => {
    let email = sign_u_email.value;
    let pass = sign_u_pass.value;
    let u_name = sign_u_name.value;
    let take_arr = [u_name, email, pass];
    localStorage.setItem(u_name, JSON.stringify(take_arr));
});
login_btn.addEventListener('click', () => {
    let user_name = u_name.value;
    let password = pass.value;
    let data = JSON.parse(localStorage.getItem(user_name));

    if (data != null && data[2] == password) {
        // var a = document.createElement('a');
        // a.href = "bright.html";
        // document.body.prependk(a);
        // console.log("yes this is working.");
        window.open('bright.html');

    }
    else {
        err.innerHTML = 'Username or Password is incorrect';
    }
});

