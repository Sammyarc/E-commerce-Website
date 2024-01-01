
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