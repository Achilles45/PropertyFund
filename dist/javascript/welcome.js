const messageOpener = document.querySelector('.nav-message');
const message = document.querySelector('#welcome-message');
const removeIcon = document.querySelector('.removeIcon');

//Function to remove the open the welcome message bar
messageOpener.addEventListener('click', function(e){
    e.preventDefault();
      message.classList.add('welcome-message--animate');
})

//Function to close the welcome message bar
removeIcon.addEventListener('click', function(e){
    e.preventDefault();
    message.classList.remove('welcome-message--animate');
})

//Another function to remove the welcome message if the user screw past a certain height
window.addEventListener('scroll', function(e){
    if (document.scrollTop > 50) {
       message.style.display = 'none';
    }
})