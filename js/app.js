// Set the date we're counting down to
var countDownDate = new Date("Feb 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


// DROPDOWNS



document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('menu');
    const categoryDropdown = document.getElementById('cdropdown');
    const categoryBtn = document.getElementById('dropdownDefaultButton');
    const svg = document.querySelector('svg');
    const filterDropdown = document.getElementById('fdropdown');
    const filterBtn = document.getElementById('filterDefaultButton');
    const filterIcon = document.getElementById('filterIcon');
    const dropdownSortCheckbox = document.getElementById('dropdownSortCheckbox');
    const dropdownSortButton = document.getElementById('dropdownSortButton');
    const sortIcon = document.getElementById('sortIcon');

    function closeMenu() {
        if (nav.classList.contains('flex')) {
            toggleMenu();
        }
    }
    
    function closeDropdowns() {
        categoryDropdown.classList.add('hidden');
        filterDropdown.classList.add('hidden');
        dropdownSortCheckbox.classList.add('hidden');
    }

    function toggleMenu() {
        btn.classList.toggle('open');
        nav.classList.toggle('flex');
        nav.classList.toggle('hidden');
    }

    function toggleCategoryDropdown() {
        categoryDropdown.classList.toggle('flex');
        categoryDropdown.classList.toggle('hidden');
        svg.classList.toggle('rotated');
        filterDropdown.classList.add('hidden');
        dropdownSortCheckbox.classList.add('hidden');
    }

    function toggleFilterDropdown() {
        filterDropdown.classList.toggle('flex');
        filterDropdown.classList.toggle('hidden');
        filterIcon.classList.toggle('rotated');
        categoryDropdown.classList.add('hidden');
        dropdownSortCheckbox.classList.add('hidden');
    }

    function toggleSortDropdown() {
        dropdownSortCheckbox.classList.toggle('flex');
        dropdownSortCheckbox.classList.toggle('hidden');
        sortIcon.classList.toggle('rotated');
        categoryDropdown.classList.add('hidden');
        filterDropdown.classList.add('hidden');
    }

    function handleDocumentClick(event) {
        const isMenuClicked = event.target.closest('#menu-btn') || event.target.closest('#menu');
        const isCategoryDropdownClicked = event.target.closest('#cdropdown') || event.target.closest('#dropdownDefaultButton');
        const isFilterDropdownClicked = event.target.closest('#fdropdown') || event.target.closest('#filterDefaultButton');
        const isSortDropdownClicked = event.target.closest('#dropdownSortCheckbox') || event.target.closest('#dropdownSortButton');

        if (!isMenuClicked && !isCategoryDropdownClicked && !isFilterDropdownClicked && !isSortDropdownClicked) {
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

    filterBtn.addEventListener('click', () => {
        toggleFilterDropdown();
        closeMenu();
    });

    dropdownSortButton.addEventListener('click', () => {
        toggleSortDropdown();
        closeMenu();
    });

    document.addEventListener('click', handleDocumentClick);
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


// PRICE BAR

// Get the elements
var rangeInput = document.getElementById('price-range-input');
var currencyInput = document.getElementById('currency-input');

// Function to update the currency input
function updateCurrencyInput() {
  currencyInput.value = rangeInput.value;
}

// Add event listener to the range input
rangeInput.addEventListener('input', updateCurrencyInput);