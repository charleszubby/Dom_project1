// for the delete icon
const deleteIcon = document.querySelectorAll('.fa-trash-alt')

deleteIcon.forEach(button => {
    button.addEventListener('click', () => {
        const cardBody = button.closest('.card-body');
        cardBody.remove();
        updateTotalPrice();
    });
});

// To like and unlike items
const likeItems = document.querySelectorAll(".fa-heart");

let liked = false;

likeItems.forEach(function (likeItem) {
    likeItem.addEventListener("click", function (){
        liked = !liked;

        if  (liked) {
            likeItem.setAttribute("class", "fa-solid fa-heart");
        } else {
            likeItem.setAttribute("class", "fa-regular fa-heart");
        }
    });
})

// functions to calculate the unit-price with the quantity

document.addEventListener('DOMContentLoaded', () => {
    const increaseButtons = document.querySelectorAll('.fa-plus-circle');
    const decreaseButtons = document.querySelectorAll('.fa-minus-circle');
    const totalElement = document.querySelector('.total');

    function updateTotalPrice() {
        const quantities = document.querySelectorAll('.quantity');
        const unitPrices = document.querySelectorAll('.unit-price');
        let totalPrice = 0;

        quantities.forEach((quantityElement, index) => {
            const quantity = parseInt(quantityElement.textContent);
            const unitPrice = parseFloat(unitPrices[index].textContent.replace(' $', ''));
            totalPrice += quantity * unitPrice;
        });

        totalElement.textContent = totalPrice.toFixed(1) + ' $';
    }
    //!function for increase button
    increaseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const quantityElement = button.nextElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            quantityElement.textContent = quantity +1;
            updateTotalPrice();
        });
    });

    decreaseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const quantityElement = button.previousElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 0) {
                quantityElement.textContent = quantity - 1;
                updateTotalPrice();
            }
        });
    });
});

