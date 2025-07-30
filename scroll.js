// Smooth scroll to sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Hide/show header based on scroll position
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const parallaxSection = document.getElementById('parallax');
    const parallaxTop = parallaxSection.offsetTop;
    const parallaxBottom = parallaxTop + parallaxSection.offsetHeight;
    const scrollPos = window.scrollY + 100; // Offset for timing

    // Hide header during parallax section
    if (scrollPos >= parallaxTop && scrollPos <= parallaxBottom) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }

    // Parallax effect
    const scrolled = window.pageYOffset;
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    
    parallaxLayers.forEach((layer, index) => {
        const speed = (index + 1) * 0.3;
        layer.style.transform = `translateY(${scrolled * speed}px)`;
    });
});
