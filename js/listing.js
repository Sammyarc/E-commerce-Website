// listing.js
document.addEventListener('DOMContentLoaded', function () {
    const productDetailsContainer = document.getElementById('productDetails');

    // Extract product ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        // Fetch product details using the product ID
        fetch('js/listing.json')
            .then(response => response.json())
            .then(data => {
                const product = findProductById(data, productId);
                if (product) {
                    // Render product details on the page
                    renderProductDetails(product);
                } else {
                    // Product not found
                    productDetailsContainer.innerHTML = '<p>Product not found</p>';
                }
            })
            .catch(error => console.error('Error fetching product details:', error));
    } else {
        // No product ID provided
        productDetailsContainer.innerHTML = '<p class="flex mt-5 text-center text-2xl font-medium">No product ID provided</' +
                'p>';
    }

    function findProductById(data, productId) {
        let foundProduct = null;
    
        data.laptops.some((brand) => {
            return brand.products.some((product) => {
                console.log(product.id);
                console.log(productId);
                if (product.id == productId) {
                    foundProduct = product;
                    return true; // Stop iteration once the product is found
                }
                return false;
            });
        });
    
        return foundProduct;
    }
    
    

    function renderProductDetails(product) {
        // Construct the HTML for displaying product details
        const productDetailsHTML = `
        <img src="${product.imageSrc}" class="hover:scale-105">
    <div class="mt-12 lg:mx-5">
        <h1 class="text-2xl font-semibold">${product.model}</h1>
        <div class="flex gap-3 mt-2">
            <div class="bg-orange px-2 py-1 rounded-2xl flex gap-1 place-items-center">
                <i class='bx bxs-star text-white'></i>
                <p class="text-white font-medium">${product.ratings.stars}</p>
            </div>
            <vr class="h-6 w-px mx-3 mt-1 bg-gray-400 border"></vr>
            <p class="mt-1 text-gray-400 font-medium">Sold ${product.ratings.sold}</p>
        </div>
        <ul class="mt-4 list-disc mx-5 text-gray-500">
            ${product.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        <div class="flex place-items-center mt-4 gap-3">
            <img src="${product.discount.icon}" class="w-6 h-6">
            <span class="text-red text-lg font-medium">${product.discount.percentage}%</span>
            <span class="text-2xl font-semibold text-gray-700">$${product.discount.currentPrice}</span>
        </div>
        <p class="text-gray-500 text-lg">Was: <span class="line-through">$${product.discount.originalPrice}</span></p>
        <div class="mt-5">
            <p class="text-xl font-semibold">Storage</p>
            <div class="flex gap-5">
                ${product.storageOptions.map(option => `<div class="selectable px-4 py-2 font-medium" onclick="toggleSelection(this)">${option}</div>`).join('')}
            </div>
        </div>
        <div class="mt-5">
            <p class="text-xl font-semibold">Memory</p>
            <div class="flex gap-5">
                ${product.memoryOptions.map(option => `<div class="selectable px-4 py-2 font-medium" onclick="toggleSelection(this)">${option}</div>`).join('')}
            </div>
        </div>
    </div>
    <div class="mt-12">
        <div>
            <p class="text-xl font-semibold">About Memory</p>
            <div class="flex gap-2 mt-2">
                <i class='${product.aboutMemory.icon} text-orange text-3xl'></i>
                <p class="text-sm">${product.aboutMemory.text}</p>
            </div>
        </div>
        <div class="mt-8">
            <form class="mb-4">
                <label for="countries" class="block mb-2 text-xl font-semibold text-gray-900">Delivery</label>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-base outline-none rounded-lg block w-full p-2.5">
                    ${product.shipping.locations.map(option => `<option>${option}</option>`).join('')}
                </select>
            </form>
            <form>
                <label for="counter-input" class="block mt-3 text-xl font-semibold text-gray-900">Choose quantity:</label>
                <div class="relative flex gap-2 mt-3">
                    <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" class=" bg-gray-100  items-center justify-center border border-gray-300 rounded-lg px-3 py-2">
                    <i class='bx bx-minus'></i>
                    </button>
                    <input type="text" id="counter-input" data-input-counter="data-input-counter" class="flex-shrink-0 text-gray-900 border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 text-center lg:text-base" placeholder="" value="1" required="required">
                    <button type="button" id="increment-button" data-input-counter-increment="counter-input" class="flex-shrink-0 bg-orange inline-flex items-center justify-center rounded-lg px-3 py-2">
                    <i class='bx bx-plus text-white' ></i>
                    </button>
                </div>
            </form>
            <div class="flex justify-between mt-5">
                <p class="text-gray-500 font-medium">Price</p>
                <p class="text-lg lg:text-xl font-semibold">$${product.price}</p>
            </div>
            <div class="flex justify-between mt-2">
                <p class="text-sm lg:text-base text-gray-500 font-medium">Shipping</p>
                <p class="text-lg lg:text-xl font-semibold">$${product.shippingCost}</p>
            </div>
            <a href="#" class="flex justify-center px-2 py-2 mt-5 bg-orange text-white font-semibold rounded-xl hover:bg-amber-500 transition duration-500 ease-in-out">Add to cart</a>
        </div>
    </div>

    `;

        // Display product details on the page
        productDetailsContainer.innerHTML = productDetailsHTML;
    }
});
