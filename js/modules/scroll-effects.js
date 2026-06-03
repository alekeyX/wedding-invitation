export function initScrollAnimations() {
    const scrollElements = document.querySelectorAll('.fade-in-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, { 
        threshold: 0.12 
    });

    scrollElements.forEach(el => observer.observe(el));
}