// script.js
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
const navLinksItems = document.querySelectorAll('.nav-links a');

navLinksItems.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add hover effect to images
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    const image = item.querySelector('img');
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
        image.style.opacity = '0.8';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
        image.style.opacity = '1';
    });
});