const rawWhatsappMessage = `¡Hola! Reportándome para el evento del año ⛩️. 
Confirmo al 100% mi asistencia a la boda de Alejandro y Stephany. 
Prometo comer delicioso 🥢, brindar por ustedes 🥂 y darlo todo en la fiesta.
¡Misión aceptada! 🫡✨
Atte:...`;
const phone = "59170369689";
const whatsappParams = new URLSearchParams({
    phone: phone,
    text: rawWhatsappMessage
});

export const WEDDING_CONFIG = {
    groom: "Alejandro",
    bride: "Stephany",
    date: "2026-08-08T15:00:00", 
    whatsappRSVP: `https://api.whatsapp.com/send?phone=${whatsappParams.toString()}`,
    romanticPhrase: "«A veces el amor es una batalla, pero vale la pena luchar por él».",
    timeline: [
        { time: "15:00", title: "Ceremonia", desc: "Parroquia San Pedro <br>(Av. Heroínas)", link: "https://maps.app.goo.gl/rPCuNE2q89KykCSD8?g_st=aw" ,
            img: "iglesia.svg"
        },
        { time: "16:30", title: "Recepción", desc: "Senda Verde <br> Salón de Eventos  <br> (Av. Linde)", link: "https://maps.app.goo.gl/R3Eab8kHsT22u2nw9?g_st=aw" ,
            img: "recepcion.svg"
        },
        { time: "18:00", title: "Acto Principal", desc: "Brindis de honor y protocolo",
             img: "baile.svg"
         },
        { time: "19:00", title: "Cena", desc: "Banquete nupcial",
             img: "cena.svg"
         },
        { time: "19:30", title: "Fiesta", desc: "¡A bailar! (No olvides tu calzado cómodo)",
             img: "dance.svg"
         },
        { time: "01:30", title: "Despedida", desc: "Fin del evento",
             img: "bye.svg"
         }
    ],
    giftSection: {
        title: "✉️ Presente de Bodas (Shugi-fukuro)",
        message: "Tu presencia es nuestro mejor regalo...",
        bankImage: "assets/photos/qr-bank.jpeg"
    }
};
