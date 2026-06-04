export function initAudioPlayer() {
    const musicBtn = document.getElementById("musicBtn");
    const audio = document.getElementById("bgMusic");
    const tooltip = document.getElementById("music-tooltip");
    
    if (!musicBtn || !audio) return;

    // 1. Mostrar el mensaje instructivo de forma temporal
    if (tooltip) {
        // Retardo inicial para no saturar al entrar a la página
        setTimeout(() => {
            tooltip.classList.add("show");
        }, 1500);

        // Auto-destrucción del mensaje a los 8 segundos
        setTimeout(() => {
            hideTooltip();
        }, 10000); // 2s de retraso + 8s de visibilidad
    }

    const hideTooltip = () => {
        if (tooltip) {
            tooltip.classList.remove("show");
            // Esperamos a que termine la transición de opacidad antes de removerlo del DOM
            setTimeout(() => tooltip.remove(), 500);
        }
    };

    // 2. Control de reproducción manual e interacción
    musicBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        
        // Si interactúan con el botón, borramos el mensaje inmediatamente
        hideTooltip();

        if (audio.paused) {
            audio.play().catch((error) => {
                console.warn("Reproducción bloqueada por el navegador:", error);
            });
            musicBtn.innerText = "🎵";
        } else {
            audio.pause();
            musicBtn.innerText = "||";
        }
    });
}