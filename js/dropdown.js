
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
        filterIcon.classList.remove('rotated');
        sortIcon.classList.remove('rotated');
    }

    function toggleNotifDropdown() {
        notifDropdown.classList.toggle('flex');
        notifDropdown.classList.toggle('hidden');
        filterDropdown.classList.add('hidden');
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
        dropdownSortCheckbox.classList.add('hidden');
        notifDropdown.classList.add('hidden');
        sortIcon.classList.remove('rotated');
    }

    function toggleSortDropdown() {
        dropdownSortCheckbox.classList.toggle('flex');
        dropdownSortCheckbox.classList.toggle('hidden');
        sortIcon.classList.toggle('rotated');
        categoryDropdown.classList.add('hidden');
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

        if (!isMenuClicked && !isCategoryDropdownClicked && !isFilterDropdownClicked && !isSortDropdownClicked && !isNotifDropdownClicked) {
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