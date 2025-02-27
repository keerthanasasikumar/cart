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

// document.addEventListener("DOMContentLoaded", function() {
//   const carousel = document.querySelector(".carousel");
//   const nextBtn = document.querySelector(".next-btn");

//   let index = 0;
//   const productWidth = document.querySelector(".product").offsetWidth + 20;

//   nextBtn.addEventListener("click", function() {
//       index++;
//       if (index >= carousel.children.length) {
//           index = 0;
//       }
//       carousel.style.transform = `translateX(-${index * productWidth}px)`;
//   });
// });

// const slider = document.querySelector('.slider');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');

// let index = 0;

// nextBtn.addEventListener('click', () => {
//     if (index < 3) {
//         index++;
//         slider.style.transform = `translateX(-${index * 100}%)`;
//     }
// });

// prevBtn.addEventListener('click', () => {
//     if (index > 0) {
//         index--;
//         slider.style.transform = `translateX(-${index * 100}%)`;
//     }
// });

document.getElementById('next').onclick = function () {
  const widthItem = document.querySelector('.item').offsetWidth;
  document.getElementById('formList').scrollLeft += widthItem
}
document.getElementById('prev').onclick = function () {
  const widthItem = document.querySelector('.item').offsetWidth;

  document.getElementById('formList').scrollLeft -= widthItem;
}


document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("mobile-menu");
  const sidebar = document.getElementById("sidebar");
  const openIcon = document.getElementById("open-icon");
  const closeIcon = document.getElementById("close-icon");

  menuToggle.addEventListener("click", function() {
      sidebar.classList.toggle("active"); // Toggle sidebar visibility
      
      // Toggle icons (bars <=> close)
      if (sidebar.classList.contains("active")) {
          openIcon.style.display = "none";
          closeIcon.style.display = "block";
      } else {
          openIcon.style.display = "block";
          closeIcon.style.display = "none";
      }
  });

  // Close sidebar when clicking outside (for mobile)
  document.addEventListener("click", function(event) {
      if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
          sidebar.classList.remove("active");
          openIcon.style.display = "block";
          closeIcon.style.display = "none";
      }
  });
});







function buyNow() {
  window.location.href = "product.html";
}