export function initSakura() {
    const container = document.getElementById('sakura-container');
    if (!container) return;
    
    const isMobile = window.innerWidth < 768;
    const petalCount = isMobile ? 15 : 32; 

    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        const size = Math.random() * 8 + 8; 
        
        petal.style.width = `${size}px`;
        petal.style.height = `${size + 4}px`;
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.animationDuration = `${Math.random() * 5 + 6}s`; 
        petal.style.animationDelay = `${Math.random() * 8}s`;
        
        container.appendChild(petal);
    }
}