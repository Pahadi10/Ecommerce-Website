function updatePrice() {
    var price = 499; // Replace 499 with the initial price of the product
    var quantityInput = document.getElementById("quantity-input");
    var quantity = quantityInput.value.trim(); // Get the input value and remove leading/trailing spaces

    // Check if the quantity is empty or invalid
    if (quantity === "" || isNaN(quantity) || quantity < 0) {
        quantity = 1; // Set quantity to 0 if it's empty, less than 0, or not a number
    } else {
        quantity = parseInt(quantity); // Convert valid input to an integer
    }

    var totalPrice = price * quantity;

    // Update the subtotal price in the table
    document.getElementById("subtotal-price").innerText = "₹" + totalPrice;
}

// Attach event listener to handle input changes in the quantity input
document.getElementById("quantity-input").addEventListener("input", function (event) {
    updatePrice();
});

// Call the updatePrice function initially to set the price based on the default quantity
updatePrice();


function updateCartTotals() {
    // Get all the rows in the cart table
    const cartRows = document.querySelectorAll('#cart tbody tr');

    let cartSubtotal = 0;

    // Iterate over each row in the cart table
    cartRows.forEach((row) => {
      // Get the quantity and price elements in the current row
      const quantityInput = row.querySelector('#quantity-input');
      const priceElement = row.querySelector('#product-price');
      const subtotalElement = row.querySelector('#subtotal-price');

      // Get the quantity and price values
      const quantity = parseInt(quantityInput.value);
      const price = parseFloat(priceElement.textContent.replace('₹', ''));

      // Calculate the subtotal for the current product
      const subtotal = quantity * price;

      // Update the subtotal element in the current row
      subtotalElement.textContent = `₹${subtotal.toFixed(2)}`;

      // Add the subtotal to the cart subtotal
      cartSubtotal += subtotal;
    });

    // Update the cart subtotal and total in the HTML
    const cartSubtotalElement = document.querySelector('.totalPrice');
    cartSubtotalElement.textContent = `₹${cartSubtotal.toFixed(2)}`;

    // Update the total (assuming no shipping cost in this example)
    const cartTotalElement = document.querySelectorAll('.totalPrice')[1];
    cartTotalElement.textContent = `₹${cartSubtotal.toFixed(2)}`;
  }

  // Attach the function to the quantity input change event
  document.querySelectorAll('#quantity-input').forEach((input) => {
    input.addEventListener('input', updateCartTotals);
  });

  // Call the function initially to set the initial totals
  updateCartTotals();

  
  // Function to handle row removal and update totals
function handleRemoveRow(event) {
  // Get the parent <tr> element
  const row = event.target.closest('tr');

  // Remove the row from the table
  row.remove();

  // Call the existing update function to update subtotal prices
  updateCartTotals();
}

// Attach the handleRemoveRow function to each remove icon
document.querySelectorAll('.remove-icon').forEach((removeIcon) => {
  removeIcon.addEventListener('click', handleRemoveRow);
});
