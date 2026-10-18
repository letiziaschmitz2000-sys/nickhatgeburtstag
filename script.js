function scrollToSection() {

    document
    .getElementById("content")
    .scrollIntoView({
        behavior: "smooth"
    });
}

function openChest() {

    const facts = [

        "🍬 Nick verbraucht mehr Lachgummis als ein Minecraft-Dorf Brot.",

        "🥤 Spezi ist vermutlich sein offizieller Treibstoff.",

        "🥅 Gegnerische Handballspieler bekommen Albträume von diesem Torwart.",

        "🎾 Auf dem Padel-Platz hat er mehr Reflexe als ein Enderman.",

        "💚 Level 20 erreicht und noch immer kein bisschen langsamer."
    ];

    const random =
        facts[Math.floor(Math.random() * facts.length)];

    document.getElementById("chest-content").innerHTML =
        "<p>" + random + "</p>";
}

let bossHealth = 100;

function attackBoss() {

    if (bossHealth <= 0) return;

    bossHealth -= 20;

    if (bossHealth < 0) {
        bossHealth = 0;
    }

    document.getElementById("boss-health").style.width =
        bossHealth + "%";

    if (bossHealth === 0) {

        document.getElementById("boss-message").innerHTML =
        `
        🎉 BOSS BESIEGT!<br><br>
        +20 Jahre Erfahrung erhalten<br>
        +500 Spezi<br>
        +1000 Lachgummis<br>
        +Legendärer Status freigeschaltet
        `;
    }
}
