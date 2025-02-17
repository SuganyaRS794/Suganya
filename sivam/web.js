let navbar =document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    seacrchform.classList.remove('active');
    cartitem.classList.remove('active');
}


let seacrchform =document.querySelector('.search-form');
    

document.querySelector('#search-btn').onclick = () =>{
    seacrchform.classList.toggle('active');
    navbar.classList.remove('active');
    cartitem.classList.remove('active');

}

let cartitem =document.querySelector('.cart-items-container');
    

document.querySelector('#cart-btn').onclick = () =>{
    cartitem.classList.toggle('active');
    navbar.classList.remove('active');
    seacrchform.classList.remove('active');
    
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    seacrchform.classList.remove('active');
    cartitem.classList.remove('active');
}

