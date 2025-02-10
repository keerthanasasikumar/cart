function updateQuantity(row, change) {
  const quantityInput = row.querySelector('.item-quantity input');
  let quantity = parseInt(quantityInput.value);

  quantity += change;

  if (quantity < 1) {
      quantity = 1; 
  }

  quantityInput.value = quantity;

  // Update subtotal (you'll need to calculate this dynamically)
  updateSubtotal(row, quantity);

  // Update cart total (you'll need to implement this logic)
  updateCartTotal();
}

function updateSubtotal(row, quantity) {
  const price = parseFloat(row.querySelector('.item-price').textContent.replace('$', ''));
  const subtotal = price * quantity;
  row.querySelector('.item-subtotal').textContent = '$' + subtotal.toFixed(2); 
}

function updateCartTotal() {
  let cartTotal = 0;
  const items = document.querySelectorAll('tbody tr'); 
  items.forEach(item => {
      const subtotalText = item.querySelector('.item-subtotal').textContent.replace('$', '');
      cartTotal += parseFloat(subtotalText);
  });
  const tax = cartTotal * 0.1; 
  const delivery = 10;
  const total = cartTotal + tax + delivery;

  document.querySelector('.summary-subtotal').textContent = '$' + cartTotal.toFixed(2);
  document.querySelector('.summary-tax').textContent = '$' + tax.toFixed(2);
  document.querySelector('.summary-total').textContent = '$' + total.toFixed(2);
}
window.addEventListener('DOMContentLoaded', () => {
  updateCartTotal(); 
  const rows = document.querySelectorAll('tbody tr');
  rows.forEach(row => {
      const plusButton = row.querySelector('.item-quantity .plus');
      const minusButton = row.querySelector('.item-quantity .minus');

      plusButton.addEventListener('click', () => updateQuantity(row, 1));
      minusButton.addEventListener('click', () => updateQuantity(row, -1));
  });
});

