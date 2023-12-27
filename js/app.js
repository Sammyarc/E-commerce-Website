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




// MENU JAVASCRIPT
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

// DROPDOWN EVENT

const categoryDropdown = document.getElementById('cdropdown');
const categoryBtn = document.getElementById('dropdownDefaultButton');
const svg = document.querySelector('svg');

function toggleMenu() {
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
}

function toggleDropdown() {
    categoryDropdown.classList.toggle('flex');
    categoryDropdown.classList.toggle('hidden');
    svg.classList.toggle('rotated');
}

btn.addEventListener('click', () => {
    toggleMenu();
    if (categoryDropdown.classList.contains('flex')) {
        toggleDropdown();
    }
});

categoryBtn.addEventListener('click', () => {
    toggleDropdown();
    if (nav.classList.contains('flex')) {
        toggleMenu();
    }
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