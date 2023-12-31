





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