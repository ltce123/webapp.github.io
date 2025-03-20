document.addEventListener('DOMContentLoaded', () => {
    const datePicker = document.getElementById('nav-date-picker');
    const calendarIcon = document.getElementById('calendar-icon');
    const currentDateSpan = document.getElementById('current-date');

    if (!datePicker || !calendarIcon || !currentDateSpan) {
        console.error("Required elements not found in the document.");
        return;
    }

  

    // Redirect to the info page when a date is selected
    datePicker.addEventListener('change', (event) => {
        const selectedDate = event.target.value;
        if (selectedDate) {
            window.location.href = `info.html?date=${selectedDate}`;
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slider .slide');
    let currentIndex = 0;
    const totalSlides = slides.length;

    const updateSlides = () => {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });
    };

    const goToSlide = (index) => {
        currentIndex = index;
        updateSlides();
    };

    // Automatically switch slides
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        goToSlide(currentIndex);
    }, 5000); // Change slide every 5 seconds

    updateSlides(); // Initialize the first slide
});

document.addEventListener('DOMContentLoaded', () => {
    // Example product data with festival dates
    const products = [
     
      
    ];


    // Load product details on product.html
    if (window.location.pathname.includes('product.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        const product = products.find(p => p.id == productId);

        if (product) {
            document.getElementById('product-name').textContent = product.name;
            document.getElementById('product-image').src = product.image;
            document.getElementById('product-description').textContent = product.description;
            document.getElementById('product-price').textContent = `Price: $${product.price}`;
        }
    }
});
// hamburger menu
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navbar = document.getElementById('navbar');

    mobileMenuBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Close menu when clicking a nav item
    document.querySelectorAll('#navbar li a').forEach(item => {
        item.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });
});