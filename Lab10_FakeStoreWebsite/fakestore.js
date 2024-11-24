let productList = [];

//Product Cards
function addCard(title, img, price, description) {
  
    const template =
        document.getElementById("card-template")
            .content.cloneNode(true);

    template.querySelector(".card-title").innerText = title;
    template.querySelector(".card-text").innerText = description;
    template.querySelector(".card-subtitle").innerText = `$${price.toFixed(2)}`;
    template.querySelector(".card-art-top").src = img;
    
    /*const node = document.createElement("img");
    node.src = imageURL;
    template.querySelector('.card-art-top').appendChild(node);*/
 
        
   /* const linkElement = template.querySelector('.card-link');
    linkElement.href = linkURL; // Make sure this matches the parameter
    linkElement.innerText = "Add to Cart";*/

    document.querySelector('#card-list').appendChild(template);
}

//fetch StoreAPI data
fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then(json => {
        json.forEach((product) =>{
            addCard(product.title, product.image, product.price, product.description);
            productList.push(product);
        
    });
    });

// Dropdown functionality
function showProducts(filterProducts) {
   const list = document.getElementById("card-list");
    list.innerHTML = "";

    filterProducts.forEach((product) => {
            addCard(product.title, product.image, product.price, product.description, product.category);
        });
    }


    const dropdownItems = document.querySelectorAll("#filterDropdown .dropdown-item");

    dropdownItems.forEach((item) => {
        item.addEventListener("click", function (event) {
            event.preventDefault();

            // Get the selected category
            const selectedCategory = this.getAttribute("data-category");

            // Filter products based on the selected category
            if (selectedCategory === "allproducts") {
                showProducts(productList);
            } else {
                const filterProducts = productList.filter(
                    (product) => product.category.toLowerCase().replace(" ", "-") === selectedCategory
                );
                showProducts(filterProducts);
            }
        });
    });

