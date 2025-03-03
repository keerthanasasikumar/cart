// const productsContainer = document.getElementById("products-container");
// const searchInput = document.getElementById("search");
// const products = [
//     { name: "Earings", price: 50,img:"images/earing1.jpg" },
//     { name: "Bracelets", price: 100,img:"images/braclet1.jpg" },
//     { name: "Necklaces", price: 75,img:"images/necklace.jpg" },
//     { name: "Modern Earings", price: 200,img:"images/earing5.jpg" },
//     { name: "Elite Bracelets", price: 200,img:"images/braclet4.jpg" },
//     { name: "Necklaces", price: 120,img:"images/necklace1.jpg" },
//     { name: "Earings", price: 95,img:"images/earing3.jpg" },
//     { name: "Braclets", price: 150,img:"images/braclet3.jpg" },
// ];

// let displayedProducts = 4;


// function loadProducts(count) {
//     productsContainer.innerHTML = "";
//     for (let i = 0; i < count && i < products.length; i++) {
//         let product = document.createElement("div");
//         product.classList.add("product");
//         product.innerHTML = `<img src="${products[i].img}"alt="${products[i].name}"<h3>${products[i].name}</h3><p>Price: $${products[i].price}</p>`;

//         product.addEventListener("click", function () {
//             window.location.href = `products.html?name=${encodeURIComponent(products[i].name)}&price=${products[i].price}&img=${encodeURIComponent(products[i].img)}`;
//         });


//         productsContainer.appendChild(product);
//     }
// }


// function loadMoreProducts() {
//     displayedProducts += 4;
//     loadProducts(displayedProducts);
// }


// function searchProducts() {
//     let query = searchInput.value.toLowerCase();
//     let filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
    
//     productsContainer.innerHTML = "";
//     filteredProducts.forEach(product => {
//         let productDiv = document.createElement("div");
//         productDiv.classList.add("product");
//         productDiv.innerHTML = `<img src="${product.img}"<h3>${product.name}</h3><p>Price: $${product.price}</p>`;

//         productDiv.addEventListener("click", function () {
//             window.location.href = `products.html?name=${encodeURIComponent(product.name)}&price=${product.price}&img=${encodeURIComponent(product.img)}`;
//         });

//         productsContainer.appendChild(productDiv);
//     });
// }


// function sortProducts() {
//     let sortValue = document.getElementById("sort").value;
//     if (sortValue === "high-to-low") {
//         products.sort((a, b) => b.price - a.price);
//     } else {
//         products.sort((a, b) => a.price - b.price);
//     }
//     loadProducts(displayedProducts);
// }


// loadProducts(displayedProducts);




const productsContainer = document.getElementById("products-container");
const searchInput = document.getElementById("search");
const products = [
    { name: "Earings", price: 50, old:100, img: "images/earing1.jpg" },
    { name: "Bracelets", price: 100,old:120,  img: "images/braclet1.jpg" },
    { name: "Necklaces", price: 75,old:100,  img: "images/necklace.jpg" },
    { name: "Earings", price: 200, old:300, img: "images/earing5.jpg" },
    { name: " Bracelets", price: 200,old:300,  img: "images/braclet4.jpg" },
    { name: "Necklaces", price: 120,old:150,  img: "images/necklace1.jpg" },
    { name: "Earings", price: 95,old:150,  img: "images/earing3.jpg" },
    { name: "Braclets", price: 150,old:200,  img: "images/braclet3.jpg" },
    { name: "Earings", price: 95,old:150,  img: "images/earing4.jpg" },
    { name: "Braclets", price: 150, old:200, img: "images/braclet1.jpg" },
];

function loadProducts() {
    productsContainer.innerHTML = "";
    products.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `<img src="${product.img}" alt="${product.name}">
                                <h3>${product.name}</h3>
                                <p class="old">${product.old}</p> <p class="price">${product.price}</p>`;
        productDiv.addEventListener("click", function () {
            window.location.href = `products.html?name=${encodeURIComponent(product.name)}&price=${product.price}&img=${encodeURIComponent(product.img)}`;
        });
        productsContainer.appendChild(productDiv);
    });
}

function searchProducts() {
    let query = searchInput.value.toLowerCase();
    let filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));

    productsContainer.innerHTML = "";
    filteredProducts.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `<img src="${product.img}" alt="${product.name}">
                                <h3>${product.name}</h3>
                                <p>Price: $${product.price}</p>`;
        productDiv.addEventListener("click", function () {
            window.location.href = `products.html?name=${encodeURIComponent(product.name)}&price=${product.price}&img=${encodeURIComponent(product.img)}`;
        });
        productsContainer.appendChild(productDiv);
    });
}

function sortProducts() {
    let sortValue = document.getElementById("sort").value;
    if (sortValue === "high-to-low") {
        products.sort((a, b) => b.price - a.price);
    } else {
        products.sort((a, b) => a.price - b.price);
    }
    loadProducts();
}

document.addEventListener("DOMContentLoaded", function () {
    loadProducts();
});


document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("mobile-menu");
  const sidebar = document.getElementById("sidebar");
  const openIcon = document.getElementById("open-icon");
  const closeIcon = document.getElementById("close-icon");

  menuToggle.addEventListener("click", function() {
      sidebar.classList.toggle("active"); 
      
     
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

  
document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("products-container");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");

    nextBtn.onclick = function () {
        productsContainer.scrollBy({
            left: 300,
            behavior: "smooth"
        });
    };

    prevBtn.onclick = function () {
        productsContainer.scrollBy({
            left: -300, 
            behavior: "smooth"
        });
    };
});
