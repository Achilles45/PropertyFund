//FUNCTIONALITY OF THE SHOPPING CART
const cartDOM = document.querySelector('.cart');

const addToCartButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_CART"]');
addToCartButtonsDOM.forEach((addToCartButtonDOM) =>{
    addToCartButtonDOM.addEventListener('click', () =>{
        const productDOM =  addToCartButtonDOM.parentElement.parentElement.parentElement;
        const product = {
            image:productDOM.querySelector('.projects-photo').getAttribute('src'),
            name:productDOM.querySelector('.project-name').innerText,
            price:productDOM.querySelector('.project-cost').innerText,
        };
           cartDOM.insertAdjacentHTML('beforeend', `
           <div class="cart__item">
           <img class="cart__item--img" src="${product.image}">
           <h6 class="cart__item--name">${product.name}</h6>
           <h6 class="cart__item--price">${product.price}</h6>
           <br />
           </div>
           `)
         addToCartButtonDOM.textContent = 'In Cart';
    })
})
