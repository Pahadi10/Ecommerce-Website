
    var MainImg = document.getElementById("MainImg");
    var smallimg = document.getElementsByClassName("small-img");

    smallimg[0].onclick = function () {
        MainImg.src = smallimg[0].src;
    };
    smallimg[1].onclick = function () {
        MainImg.src = smallimg[1].src;
    };
    smallimg[2].onclick = function () {
        MainImg.src = smallimg[2].src;
    };
    smallimg[3].onclick = function () {
        MainImg.src = smallimg[3].src;
    };

    function updatePrice() {
        var price = 499; // Replace 499 with the initial price of the product
        var quantityInput = document.getElementById("quantity-input");
        var quantity = quantityInput.value.trim(); // Get the input value and remove leading/trailing spaces

        // Check if the quantity is empty or invalid
        if (quantity === "" || isNaN(quantity) || quantity < 0) {
            quantity = 0; // Set quantity to 0 if it's empty, less than 0, or not a number
        } else {
            quantity = parseInt(quantity); // Convert valid input to an integer
        }

        var totalPrice = price * quantity;

        // Update the price displayed on the page
        document.getElementById("product-price").innerText = "₹" + totalPrice;
    }

    // Attach event listener to handle input changes in the quantity input
    document.getElementById("quantity-input").addEventListener("input", function (event) {
        updatePrice();
    });

    // Call the updatePrice function initially to set the price based on the default quantity
    updatePrice();
