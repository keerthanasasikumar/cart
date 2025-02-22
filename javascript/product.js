document.querySelectorAll('.thumbnail').forEach(item => {
  item.addEventListener('click', event => {
    document.getElementById('main-img').src = event.target.src;
  })
});

// document.addEventListener("DOMContentLoaded", function() {
//   const products = document.querySelector(".products");
//   const nextBtn = document.querySelector(".next-btn");
//   let scrollAmount = 0;

//   nextBtn.addEventListener("click", function() {
//       const productWidth = document.querySelector(".product").offsetWidth + 20;
//       scrollAmount += productWidth;
//       if (scrollAmount >= products.scrollWidth - products.clientWidth) {
//           scrollAmount = 0;
//       }
//       products.style.transform = `translateX(-${scrollAmount}px)`;
//   });
// });

document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector(".carousel");
  const nextBtn = document.querySelector(".next-btn");

  let index = 0;
  const productWidth = document.querySelector(".product").offsetWidth + 20; // Including margin

  nextBtn.addEventListener("click", function() {
      index++;
      if (index >= carousel.children.length) {
          index = 0;
      }
      carousel.style.transform = `translateX(-${index * productWidth}px)`;
  });
});



function buyNow() {
  window.location.href = "product.html";
}