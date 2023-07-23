var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function(){
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    MainImg.src = smallimg[3].src;
}

    // Function to update the price based on the quantity
    function updatePrice() {
        var price = 499; // Replace 499 with the initial price of the product
        var quantityInput = document.getElementById("quantity-input");
        var quantity = parseInt(quantityInput.value);

        // Check if the quantity is less than 1 and set it to 1
        if (isNaN(quantity) || quantity < 1) {
            quantity = 1;
            quantityInput.value = quantity;
        }

        var totalPrice = price * quantity;

        // Update the price displayed on the page
        document.getElementById("product-price").innerText = "₹" + totalPrice;
    }

    // Attach an event listener to the quantity input
    document.getElementById("quantity-input").addEventListener("input", updatePrice);


