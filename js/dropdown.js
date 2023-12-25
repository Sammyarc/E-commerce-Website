const categoryDropdown = document.getElementById('cdropdown');
const categoryBtn = document.getElementById('dropdownDefaultButton');
const svg = document.querySelector('svg');

categoryBtn.addEventListener('click', () => {
    categoryDropdown
        .classList
        .toggle('flex');
    categoryDropdown
        .classList
        .toggle('hidden');
    svg
        .classList
        .toggle('rotated');
})