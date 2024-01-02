
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('menu');
    const categoryDropdown = document.getElementById('cdropdown');
    const categoryBtn = document.getElementById('dropdownDefaultButton');
    const filterDropdown = document.getElementById('fdropdown');
    const filterBtn = document.getElementById('filterDefaultButton');
    const filterIcon = document.getElementById('filterIcon');
    const dropdownSortCheckbox = document.getElementById('dropdownSortCheckbox');
    const dropdownSortButton = document.getElementById('dropdownSortButton');
    const sortIcon = document.getElementById('sortIcon');
    const notifButton = document.getElementById('dropdownNotificationButton');
    const notifDropdown = document.getElementById('dropdownNotification');
    const userDropdown = document.getElementById('userDropdown');
    const userButton = document.getElementById('avatarButton');

    function closeMenu() {
        if (nav.classList.contains('flex')) {
            toggleMenu();
        }
    }
    
    function closeDropdowns() {
        categoryDropdown.classList.add('hidden');
        filterDropdown.classList.add('hidden');
        dropdownSortCheckbox.classList.add('hidden');
        notifDropdown.classList.add('hidden');
        userDropdown.classList.add('hidden');
        filterIcon.classList.remove('rotated');
        sortIcon.classList.remove('rotated');
    }

    function toggleMenu() {
        btn.classList.toggle('open');
        nav.classList.toggle('flex');
        nav.classList.toggle('hidden');
    }

    function toggleCategoryDropdown() {
        categoryDropdown.classList.toggle('flex');
        categoryDropdown.classList.toggle('hidden');
        filterDropdown.classList.add('hidden');
        dropdownSortCheckbox.classList.add('hidden');
        notifDropdown.classList.add('hidden');
        userDropdown.classList.add('hidden');
        filterIcon.classList.remove('rotated');
        sortIcon.classList.remove('rotated');
    }

    function toggleNotifDropdown() {
        notifDropdown.classList.toggle('flex');
        notifDropdown.classList.toggle('hidden');
        filterDropdown.classList.add('hidden');
        dropdownSortCheckbox.classList.add('hidden');
        categoryDropdown.classList.add('hidden');
        userDropdown.classList.add('hidden');
        filterIcon.classList.remove('rotated');
        sortIcon.classList.remove('rotated');
    }

    function toggleUserDropdown() {
        userDropdown.classList.toggle('flex');
        userDropdown.classList.toggle('hidden');
        filterDropdown.classList.add('hidden');
        notifDropdown.classList.add('hidden');
        dropdownSortCheckbox.classList.add('hidden');
        categoryDropdown.classList.add('hidden');
        filterIcon.classList.remove('rotated');
        sortIcon.classList.remove('rotated');
    }

    function toggleFilterDropdown() {
        filterDropdown.classList.toggle('flex');
        filterDropdown.classList.toggle('hidden');
        filterIcon.classList.toggle('rotated');
        categoryDropdown.classList.add('hidden');
        userDropdown.classList.add('hidden');
        dropdownSortCheckbox.classList.add('hidden');
        notifDropdown.classList.add('hidden');
        sortIcon.classList.remove('rotated');
    }

    function toggleSortDropdown() {
        dropdownSortCheckbox.classList.toggle('flex');
        dropdownSortCheckbox.classList.toggle('hidden');
        sortIcon.classList.toggle('rotated');
        categoryDropdown.classList.add('hidden');
        userDropdown.classList.add('hidden');
        filterDropdown.classList.add('hidden');
        notifDropdown.classList.add('hidden');
        filterIcon.classList.remove('rotated');
    }

    function handleDocumentClick(event) {
        const isMenuClicked = event.target.closest('#menu-btn') || event.target.closest('#menu');
        const isCategoryDropdownClicked = event.target.closest('#cdropdown') || event.target.closest('#dropdownDefaultButton');
        const isFilterDropdownClicked = event.target.closest('#fdropdown') || event.target.closest('#filterDefaultButton');
        const isSortDropdownClicked = event.target.closest('#dropdownSortCheckbox') || event.target.closest('#dropdownSortButton');
        const isNotifDropdownClicked = event.target.closest('#dropdownNotification') || event.target.closest('#dropdownNotificationButton');
        const isUserDropdownClicked = event.target.closest('#userDropdown') || event.target.closest('#avatarButton');

        if (!isMenuClicked && !isCategoryDropdownClicked && !isFilterDropdownClicked && !isSortDropdownClicked && !isNotifDropdownClicked && !isUserDropdownClicked) {
            closeMenu();
            closeDropdowns();
        }
    }

    btn.addEventListener('click', () => {
        toggleMenu();
        closeDropdowns();
    });

    categoryBtn.addEventListener('click', () => {
        toggleCategoryDropdown();
        closeMenu();
    });

    notifButton.addEventListener('click', () => {
        toggleNotifDropdown();
        closeMenu();
    });

    userButton.addEventListener('click', () => {
        toggleUserDropdown();
        closeMenu();
    });

    dropdownSortButton.addEventListener('click', () => {
        toggleSortDropdown();
        closeMenu();
    });


    filterBtn.addEventListener('click', () => {
        toggleFilterDropdown();
        closeMenu();
    });


    document.addEventListener('click', handleDocumentClick);
});


// PRICE BAR

// Get the elements
const rangeInput = document.querySelectorAll('.price-range-input');
const currencyInput = document.querySelectorAll('.currency-input');

// Function to update the currency input
function updateCurrencyInput(index) {
  currencyInput[index].value = rangeInput[index].value;
}

// Add event listener to each range input
rangeInput.forEach((input, index) => {
  input.addEventListener('input', () => updateCurrencyInput(index));
});




// LANGUAGE DROPDOWN

document.addEventListener("DOMContentLoaded", function () {
    const selectedLanguage = document.getElementById('selectedLanguage');
    const languageList = document.getElementById('languageList');

    selectedLanguage.addEventListener('click', function () {
        languageList.style.display = (languageList.style.display === 'block') ? 'none' : 'block';
    });

    languageList.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            selectedLanguage.textContent = event.target.textContent;
            languageList.style.display = 'none';

            // Add logic to change language based on the selected language (event.target.dataset.lang)
            // For example, you can call a function to update content based on the selected language.
        }
    });

    // Close the language list if the user clicks outside of it
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.language-container')) {
            languageList.style.display = 'none';
        }
    });
});

// Search display function
document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.getElementById('searchBtn');
    const searchBox = document.querySelector('.search-box');
    const closeBtn = document.getElementById('closeBtn');

    searchBtn.addEventListener('click', function () {
        searchBox.style.display = 'flex';
        searchBtn.style.display = 'none';
        closeBtn.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        searchBox.style.display = 'none';
        searchBtn.style.display = 'block';
        closeBtn.style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', function () {


// Fetch the JSON data (you need to replace 'products.json' with the actual path to your JSON file)
fetch('js/products.json')
  .then(response => response.json())
  .then(data => {
    // Call the function to display products
    displayProducts(data.laptops);
  })
  .catch(error => console.error('Error fetching products:', error));

// Function to display products dynamically
function displayProducts(laptops) {
  const productGrid = document.getElementById('productGrid');

  laptops.forEach(laptop => {
    laptop.products.forEach(product => {
      const productElement = createProductElement(product);
      productGrid.appendChild(productElement);
    });
  });
}

// Helper function to create a product element
function createProductElement(product) {
  const productElement = document.createElement('div');
  productElement.className = 'border-2 rounded-xl mt-5 ';

  // Construct the product HTML
  productElement.innerHTML = `
    <a href="#">
      <img src="${product.imageSrc}" alt="${product.name}" class="h-20 object-cover rounded-xl">
    </a>
    <div class="p-2">
      <div class="flex gap-2 place-items-center md:gap-5">
        <p class="text-sm font-semibold md:text-lg">$${product.price.toFixed(2)}</p>
        <p class="text-sm font-light line-through md:text-base">$${product.discountedPrice.toFixed(2)}</p>
      </div>
      <p class="font-normal text-xs md:font-medium">${product.name}</p>
      <div class="justify-between mt-5 place-items-center md:flex md:mt-2">
        <div class="flex items-center mb-2 md:mb-0">
          <svg
            class="w-4 h-4 text-orange me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewbox="0 0 22 20">
            <path
            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
          <p class="text-xs ms-2 md:text-sm font-bold">${product.rating.toFixed(2)}</p>
          <span class="w-1 h-1 mx-1.5 bg-orange rounded-full"></span>
          <a href="#" class="text-xs ms-2 md:text-sm font-medium  hover:underline">${product.reviewCount} reviews</a>
        </div>
        <a href="#" class="flex justify-center px-2 py-2 bg-orange text-white font-semibold rounded-xl hover:bg-amber-500 transition duration-500 ease-in-out">Add to cart</a>
      </div>
    </div>
  `;

  return productElement;
}

} );