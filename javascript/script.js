document.addEventListener("DOMContentLoaded", function () {
    const updateCart = () => {
        let subtotal = 0;
        document.querySelectorAll(".cart-item").forEach(item => {
            let price = parseFloat(item.querySelector(".price").innerText.replace("$", ""));
            let quantity = parseInt(item.querySelector(".quantity").value);
            let subTotal = price * quantity;
            item.querySelector(".subtotal").innerText = `$${subTotal.toFixed(2)}`;
            subtotal += subTotal;
        });

        let tax = 10.00;
        let delivery = 10.00;
        let total = subtotal + tax + delivery;

        document.getElementById("subtotal").innerText = `$${subtotal.toFixed(2)}`;
        document.getElementById("total").innerText = `$${total.toFixed(2)}`;
    };

    document.querySelectorAll(".increase, .decrease").forEach(button => {
        button.addEventListener("click", function () {
            let input = this.parentElement.querySelector(".quantity");
            let value = parseInt(input.value);
            input.value = this.classList.contains("increase") ? value + 1 : Math.max(value - 1, 1);
            updateCart();
        });
    });

    document.querySelectorAll(".remove").forEach(button => {
        button.addEventListener("click", function () {
            this.closest(".cart-item").remove();
            updateCart();
        });
    });

    updateCart();
}); 
// checkout
function proceedToCheckout(){
    window.location.href="html/checkout.html"
  }