//VALUES FROM THE UI
const registerForm = document.querySelector('#register-form');
const registerFirstName = document.querySelector('#register__fname');
const registerLastName = document.querySelector('#register__lname');
const registerEmail = document.querySelector('#register-email');
const registerNumber = document.querySelector('#register-number');
const gender = document.querySelector('#gender');
const investorType = document.querySelector('#type-of-investor')
const registerPassword = document.querySelector('#register__password');
const registerConfirmPassword = document.querySelector('#confirm-password');


//Add event listener to the form
registerForm.addEventListener('submit', verifyRegister)

//Function to very the user during registration
function verifyRegister(e){
    e.preventDefault();
    if (registerFirstName.value =='' || registerLastName == '' || registerEmail.value === '' || registerNumber.value ==='' || gender.value === '' ||  investorType.value === '' || registerPassword.value === '' || registerConfirmPassword.value === '') {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'danger-alert';
        const errorText = document.createTextNode('** Please all fields are required')
        errorDiv.appendChild(errorText)
        const registerName  = document.querySelector('.register_name')
        registerForm.insertBefore(errorDiv, registerName);
        setTimeout(function(){
            document.querySelector('.danger-alert').remove();
        }, 3000)
        registerFirstName.style.borderColor = 'red';
        registerLastName.style.borderColor = 'red';
        registerEmail.style.borderColor = 'red';
        registerNumber.style.borderColor = 'red';
        gender.style.borderColor = 'red';
        investorType.style.borderColor = 'red';
        registerPassword.style.borderColor = 'red';
        registerConfirmPassword.style.borderColor = 'red';
    }else{
        if (registerPassword.value !== registerConfirmPassword.value) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'danger-alert';
        const errorText = document.createTextNode('** Password are not matching')
        errorDiv.appendChild(errorText)
        const registerName  = document.querySelector('.register_name')
        registerForm.insertBefore(errorDiv, registerName);
        setTimeout(function(){
            document.querySelector('.danger-alert').remove();
        }, 3000)
        }else{
            const errorDiv = document.createElement('div');
            errorDiv.className = 'success-alert';
            const errorText = document.createTextNode('** Your registration was successful')
            errorDiv.appendChild(errorText)
            const registerName  = document.querySelector('.register_name')
            registerForm.insertBefore(errorDiv, registerName);
            setTimeout(function(){
                document.querySelector('.success-alert').remove();
            }, 3000)
        }
    }
}
