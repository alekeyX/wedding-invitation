export function initAudioPlayer() {
    const musicBtn = document.getElementById("musicBtn");
    const audio = document.getElementById("bgMusic");
    
    if (!musicBtn || !audio) return;

    musicBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play().catch(() => {
                console.warn("Audio bloqueado: El usuario debe interactuar primero.");
            });
            musicBtn.innerText = "🎵";
        } else {
            audio.pause();
            musicBtn.innerText = "||";
        }
    });
}