export function initAudioPlayer() {
    const musicBtn = document.getElementById("musicBtn");
    const audio = document.getElementById("bgMusic");
    
    if (!musicBtn || !audio) return;

    const startAudioOnInteraction = () => {
        audio.play()
            .then(() => {
                musicBtn.innerText = "⏸️";
                document.removeEventListener("click", startAudioOnInteraction);
                document.removeEventListener("touchstart", startAudioOnInteraction);
            })
            .catch((error) => {
                console.log("El navegador sigue bloqueando el audio hasta una interacción más directa.", error);
            });
    };

    document.addEventListener("click", startAudioOnInteraction);
    document.addEventListener("touchstart", startAudioOnInteraction); 

    musicBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (audio.paused) {
            audio.play();
            musicBtn.innerText = "⏸️";
        } else {
            audio.pause();
            musicBtn.innerText = "🎵";
        }
    });
}