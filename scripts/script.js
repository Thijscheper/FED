
const cartButton = document.querySelector(".shoplogo");


function openCart() {
    const cartDiv = document.querySelector(".bag");
    cartDiv.classList.toggle("visible");
    
}

cartButton.addEventListener("click", openCart);// JavaScript Document
