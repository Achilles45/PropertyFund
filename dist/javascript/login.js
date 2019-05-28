//VERIFICATION OR ERROR MESSAGE FOR LOGIN PAGE
//VARIABLES FROM THE UI

const loginForm = document.querySelector('#login-form');
const loginUsername = document.querySelector('#login-username');
const loginPassword = document.querySelector('#login-password');
const loginBtn = document.querySelector('#login-btn');
//Add event listener to the form
loginForm.addEventListener('submit', verifyLogin)

//Function to verify login
function verifyLogin(e){
    e.preventDefault();
    if (loginUsername.value === '' || loginPassword.value === '') {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'danger-alert';
        errorDiv.appendChild(document.createTextNode('All fields are required'))
        loginForm.insertBefore(errorDiv, loginUsername)
        loginUsername.style.borderColor = 'red';
        loginPassword.style.borderColor = 'red';
        setTimeout(clearError, 3000)
    }
}
//Function to clear error message after 3 seconds
function clearError(e){
    document.querySelector('.danger-alert').remove()
}