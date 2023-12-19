const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

function login(){

    var email = document.getElementById('emaile').value;
    var password = document.getElementById('passworde').value;

    if (email && password){

        window.location.href = 'home.html';
    }
}
   
function register(){

    var Username = document.getElementById('Username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;

    if (Username && email && password && cpassword){

        window.location.href = 'home.html';
    }

}