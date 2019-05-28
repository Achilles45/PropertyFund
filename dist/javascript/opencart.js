//Values to open and close the cart
const cartOpener = document.querySelector('#nav-cart');
const cart = document.querySelector('.cart')
//Function to open and close the cart
cartOpener.addEventListener('click', function(e){
    e.preventDefault();
    cart.classList.toggle('show-cart');
})