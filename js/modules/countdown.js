export function initCountdown(targetIsoDate) {
    const targetDate = new Date(targetIsoDate).getTime();
    const container = document.getElementById("countdown");
    
    const elements = {
        days: document.getElementById("days"),
        hours: document.getElementById("hours"),
        minutes: document.getElementById("minutes"),
        seconds: document.getElementById("seconds")
    };

    const update = () => {
        const now = new Date().getTime();
        const diff = targetDate - now;

        if (diff < 0) {
            container.innerHTML = "<h3>¡Llegó el gran día! 🌸</h3>";
            clearInterval(intervalId);
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        elements.days.innerText = String(d).padStart(2, '0');
        elements.hours.innerText = String(h).padStart(2, '0');
        elements.minutes.innerText = String(m).padStart(2, '0');
        elements.seconds.innerText = String(s).padStart(2, '0');
    };

    const intervalId = setInterval(update, 1000);
    update();
}