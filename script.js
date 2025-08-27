// Menu data
const menuItems = [
    {
        id: 1,
        name: "Houmous",
        description: "Purée de pois chiches, tahini, citron et huile d'olive",
        price: "2.500 FCFA",
        category: "entrees"
    },
    {
        id: 2,
        name: "Taboulé",
        description: "Salade de persil, menthe, tomates et boulghour",
        price: "3.000 FCFA",
        category: "entrees"
    },
    {
        id: 3,
        name: "Baba Ganoush",
        description: "Purée d'aubergines grillées, tahini et épices",
        price: "3.000 FCFA",
        category: "entrees"
    },
    {
        id: 4,
        name: "Fattouch",
        description: "Salade libanaise avec légumes croquants et pain toasté",
        price: "3.500 FCFA",
        category: "entrees"
    },
    {
        id: 5,
        name: "Plateau de Mezzés",
        description: "Assortiment de 8 entrées libanaises",
        price: "12.000 FCFA",
        category: "entrees"
    },
    {
        id: 6,
        name: "Chawarma Poulet",
        description: "Brochettes de poulet mariné, servi avec riz et salade",
        price: "5.500 FCFA",
        category: "plats"
    },
    {
        id: 7,
        name: "Chawarma Boeuf",
        description: "Brochettes de bœuf mariné, servi avec riz et salade",
        price: "6.500 FCFA",
        category: "plats"
    },
    {
        id: 8,
        name: "Kéfta",
        description: "Boulettes de viande hachée épicées, grillées au charbon",
        price: "7.000 FCFA",
        category: "plats"
    },
    {
        id: 9,
        name: "Méchoui",
        description: "Agneau cuit lentement, tendre et parfumé",
        price: "9.000 FCFA",
        category: "plats"
    },
    {
        id: 10,
        name: "Plateau Mixte",
        description: "Assortiment de grillades pour 2 personnes",
        price: "18.000 FCFA",
        category: "plats"
    },
    {
        id: 11,
        name: "Baklava",
        description: "Pâtisserie feuilletée aux noix et sirop de miel",
        price: "2.500 FCFA",
        category: "desserts"
    },
    {
        id: 12,
        name: "Knafeh",
        description: "Gâteau au fromage et semoule, parfumé à l'eau de rose",
        price: "3.500 FCFA",
        category: "desserts"
    },
    {
        id: 13,
        name: "Maamoul",
        description: "Biscuits fourrés aux dattes ou aux noix",
        price: "2.000 FCFA",
        category: "desserts"
    },
    {
        id: 14,
        name: "Oum Ali",
        description: "Dessert égyptien au lait, noix et raisins",
        price: "3.000 FCFA",
        category: "desserts"
    },
    {
        id: 15,
        name: "Eau Minérale",
        description: "Bouteille 50cl",
        price: "500 FCFA",
        category: "boissons"
    },
    {
        id: 16,
        name: "Jus Frais",
        description: "Mango, orange ou citron",
        price: "1.500 FCFA",
        category: "boissons"
    },
    {
        id: 17,
        name: "Thé à la Menthe",
        description: "Thé vert traditionnel à la menthe fraîche",
        price: "1.000 FCFA",
        category: "boissons"
    },
    {
        id: 18,
        name: "Café Turc",
        description: "Café traditionnel libanais",
        price: "1.500 FCFA",
        category: "boissons"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize menu
    displayMenuItems('all');
    
    // Initialize testimonials slider
    initTestimonialSlider();
    
    // Setup mobile navigation
    setupMobileNav();
    
    // Setup form submissions
    setupForms();
    
    // Setup menu filtering
    setupMenuFiltering();
    
    // Setup smooth scrolling for navigation links
    setupSmoothScrolling();
});

// Display menu items based on category
function displayMenuItems(category) {
    const menuContainer = document.querySelector('.menu-items');
    menuContainer.innerHTML = '';
    
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    filteredItems.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.classList.add('menu-item');
        menuItemElement.innerHTML = `
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </div>
            <div class="menu-item-price">${item.price}</div>
        `;
        menuContainer.appendChild(menuItemElement);
    });
}

// Initialize testimonial slider
function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.testimonial-controls .prev');
    const nextBtn = document.querySelector('.testimonial-controls .next');
    let currentIndex = 0;
    
    // Show first testimonial
    showTestimonial(currentIndex);
    
    // Previous button event
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    });
    
    // Next button event
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    });
    
    // Auto slide every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }, 5000);
}

// Show specific testimonial
function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });
    
    testimonials[index].classList.add('active');
}

// Setup mobile navigation
function setupMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Setup form submissions
function setupForms() {
    // Booking form
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const date = formData.get('date');
            const time = formData.get('time');
            const guests = formData.get('guests');
            const message = formData.get('message');
            
            // In a real application, you would send this data to a server
            // For this example, we'll just show an alert
            alert(`Merci ${name} pour votre réservation!\nNous vous attendons le ${date} à ${time} pour ${guests} personne(s).\nNous vous contacterons bientôt au ${phone} pour confirmation.`);
            
            // Reset form
            this.reset();
        });
    }
    
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // In a real application, you would send this data to a server
            // For this example, we'll just show an alert
            alert(`Merci ${name} pour votre message!\nNous vous répondrons bientôt à l'adresse ${email}.`);
            
            // Reset form
            this.reset();
        });
    }
}

// Setup menu filtering
function setupMenuFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Filter menu items
            const category = button.getAttribute('data-category');
            displayMenuItems(category);
        });
    });
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});