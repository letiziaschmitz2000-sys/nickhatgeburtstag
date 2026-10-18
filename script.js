function scrollToGame(){

document
.getElementById("game")
.scrollIntoView({
behavior:"smooth"
});

}

window.onload = () => {

const popup =
document.getElementById(
"achievement-popup"
);

popup.classList.add("show");

setTimeout(() => {
popup.classList.remove("show");
},5000);

animateCounters();

};

let diamonds = 0;

function openLootChest(){

const roll = Math.random()*100;

let loot = "";

if(roll < 45){

loot = "🪨 Du hast Eisen gefunden.";

}

else if(roll < 70){

loot = "🍞 Du hast Brot gefunden.";

}

else if(roll < 85){

loot = "🥤 Du hast Spezi gefunden.";

}

else if(roll < 95){

loot = "🍬 Du hast Lachgummis gefunden.";

}

else if(roll < 99){

diamonds++;

document.getElementById(
"diamond-count"
).innerText = diamonds;

loot =
"💎 SELTENER DROP! Du hast einen Diamanten gefunden!";

}

else{

loot =
"⭐ LEGENDARY DROP! Netherite erhalten!";
}

document.getElementById(
"loot-result"
).innerHTML = loot;
}

let health = 100;

function attackBoss(){

if(health <= 0) return;

health -= 20;

if(health < 0)
health = 0;

document.getElementById(
"boss-health"
).style.width =
health + "%";

if(health === 0){

document.getElementById(
"boss-message"
).innerHTML =

`
🎉 MISSION ERFOLGREICH!

<br><br>

Spieler Nick hat das Erwachsenenleben besiegt.

<br><br>

💎 Diamantrüstung erhalten
<br>
🥤 Unendlich Spezi
<br>
🍬 Unendlich Lachgummis
`;

launchConfetti();
}
}

function launchConfetti(){

for(let i=0;i<120;i++){

const confetti =
document.createElement("div");

confetti.style.position="fixed";
confetti.style.left=Math.random()*100+"vw";
confetti.style.top="-10px";
confetti.style.width="10px";
confetti.style.height="10px";
confetti.style.background=
`hsl(${Math.random()*360},100%,50%)`;

confetti.style.transition="4s";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.style.transform=
`translateY(110vh) rotate(720deg)`;

},20);

setTimeout(()=>{
confetti.remove();
},4000);

}
}

let clicks = 0;

document.addEventListener(
"click",
(event)=>{

if(event.target.id==="secret"){

clicks++;

if(clicks===5){

alert(
"🏆 Geheimes Achievement!\n\nSpezi Overload freigeschaltet!"
);

}
}
}
);

function animateCounters(){

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

const target =
Number(counter.dataset.target);

let current = 0;

const update = ()=>{

current += Math.ceil(target/50);

if(current > target)
current = target;

counter.innerText = current;

if(current < target){

requestAnimationFrame(update);

}

};

update();

});

}
