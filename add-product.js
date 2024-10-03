
    // Function to load products from local storage and display them
    function loadProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const productList = document.getElementById('productList');

    products.forEach((product, index) => {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col-md-4');
    colDiv.setAttribute('data-aos', 'fade-up');
    colDiv.setAttribute('data-aos-delay', index * 100);
    colDiv.innerHTML = `
                <div class="card shadow-sm">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text text-primary">฿${product.price}</p>
                        <a href="#" class="btn btn-outline-warning">View Details</a>
                    </div>
                </div>
            `;
    productList.appendChild(colDiv);
});
}

    // Load products when the page is loaded
    window.onload = loadProducts;
