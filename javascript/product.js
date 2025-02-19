document.querySelectorAll('.thumbnail').forEach(item => {
  item.addEventListener('click', event => {
    document.getElementById('main-img').src = event.target.src;
  })
});
function buyNow() {
  window.location.href = "product.html";
}