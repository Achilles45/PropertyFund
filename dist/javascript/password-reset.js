//FORM VALUES FROM THE UI
const passwordResetFrom = document.querySelector('#reset-form');
const resetEmail = document.querySelector('#password-reset__email');

passwordResetFrom.addEventListener('submit', verifyPasswordReset)

//Function to validate password reset
function verifyPasswordReset(e){
    e.preventDefault();
    if (resetEmail.value === '') {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'danger-alert';
        errorDiv.appendChild(document.createTextNode('Please provide your emil address'))
        passwordResetFrom.insertBefore(errorDiv, resetEmail)
        resetEmail.style.borderColor = 'red';
        setTimeout(clearError, 3000)
    }
}
//Function to clear the error
function clearError(){
    document.querySelector('.danger-alert').remove();
}