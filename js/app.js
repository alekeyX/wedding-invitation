import { WEDDING_CONFIG } from '../config/wedding-config.js';
import { initCountdown } from './modules/countdown.js';
import { initSakura } from './modules/sakura.js';
import { initScrollAnimations } from './modules/scroll-effects.js';
import { initAudioPlayer } from './utils/audio-player.js';

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inyección de propiedades de Datos Semánticos
    document.getElementById("couple-groom").innerText = `${WEDDING_CONFIG.groom}`;
    document.getElementById("couple-bride").innerText = `${WEDDING_CONFIG.bride}`;
    document.getElementById("romantic-phrase").innerText = WEDDING_CONFIG.romanticPhrase;
    document.getElementById("rsvp-btn").href = WEDDING_CONFIG.whatsappRSVP;

    const timelineLayout = document.getElementById("timeline-layout");
    if(timelineLayout) {
        WEDDING_CONFIG.timeline.forEach((item, index) => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "timeline-item";
            itemDiv.className = index % 2 === 0 ? 'timeline-right' : 'timeline-left';
            itemDiv.innerHTML = `
                <img class="timeline-img"
                src="assets/images/${item.img}"/>
                <div class="timeline-time">${item.time}</div>
                <div class="timeline-title">${item.title}</div>
                <div class="timeline-desc">${item.desc}</div>
                ${item.link ? `<a class="map-btn maps-link" href="${item.link}" target="_blank">Ver ubicación</a>` : ""}
            `;
            timelineLayout.appendChild(itemDiv);
        });
    }

    // 3. Inicialización del Núcleo de Módulos
    initCountdown(WEDDING_CONFIG.date);
    initSakura();
    initScrollAnimations();
    initAudioPlayer();
});