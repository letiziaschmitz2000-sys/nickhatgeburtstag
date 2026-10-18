function scrollToGame(){

document
.getElementById("game")
.scrollIntoView({
behavior:"smooth"
});

}

window.onload=()=>{

const popup=
document.getElementById(
"achievement-popup"
);

popup.classList.add("show");

setTimeout(()=>{

popup.classList.remove("show");

},5000);

animateCounters();
};

function openChest(){

const facts=[

"🍬 Nick kann Lachgummis schneller farmen als Diamanten.",

"🥤 Spezi gibt +100 Energie.",

"🥅 Gegnerische Handballer fürchten diesen Torwart.",

"🎾 Padel-Skill freigeschaltet.",

"👑 Legendärer Level-20-Spieler."
];

const random=
facts[Math.floor(
Math.random()*facts.length
)];

document.getElementById(
"chest-content"
).innerHTML=random;

}

let health=100;

function attackBoss(){

if(health<=0)return;

health-=20;

if(health<0)health=0;

document.getElementById(
"boss-health"
).style.width=
health+"%";

if(health===0){

document.getElementById(
"boss-message"
).innerHTML=

"🎉 BOSS BESIEGT!<br><br>+500 Spezi<br>+1000 Lachgummis<br>+Level-Up erfolgreich";

launchConfetti();
}
}

function launchConfetti(){

for(let i=0;i<150;i++){

const c=
document.createElement("div");

c.style.position="fixed";

c.style.left=
Math.random()*100+"vw";

c.style.top="-20px";

c.style.width="10px";
c.style.height="10px";

c.style.background=
`hsl(${Math.random()*360},100%,50%)`;

c.style.zIndex="9999";

c.style.transition="4s";

document.body.appendChild(c);

setTimeout(()=>{

c.style.transform=
`translateY(110vh) rotate(720deg)`;

},50);

setTimeout(()=>{

c.remove();

},4000);
}
}

let gummies=0;

setInterval(()=>{

const gummy=
document.createElement("div");

gummy.className="gummy";

gummy.innerHTML="🍬";

gummy.style.left=
Math.random()*100+"vw";

gummy.onclick=()=>{

gummies++;

document.getElementById(
"score"
).innerHTML=
`🍬 Lachgummis: ${gummies}`;

gummy.remove();
};

document.body.appendChild(gummy);

setTimeout(()=>{

gummy.remove();

},8000);

},2500);

setInterval(()=>{

const spezi=
document.createElement("div");

spezi.innerHTML="🥤";

spezi.style.position="fixed";

spezi.style.left="-50px";

spezi.style.top=
Math.random()*80+"vh";

spezi.style.fontSize="2rem";

spezi.style.transition=
"8s linear";

document.body.appendChild(spezi);

setTimeout(()=>{

spezi.style.left="110vw";

},50);

setTimeout(()=>{

spezi.remove();

},8000);

},7000);

let clicks=0;

document.addEventListener(
"click",
(e)=>{

if(e.target.id==="secret"){

clicks++;

if(clicks===5){

alert(
"🥤 GEHEIMES ACHIEVEMENT!\n\nSPEZI OVERLOAD FREIGESCHALTET!"
);

}
}
}
);

function animateCounters(){

const counters=
document.querySelectorAll(".counter");

counters.forEach(counter=>{

const target=
Number(counter.dataset.target);

let current=0;

const update=()=>{

const increment=
Math.ceil(target/50);

current+=increment;

if(current>target)
current=target;

counter.innerText=current;

if(current<target){

requestAnimationFrame(update);

}
};

update();

});
}
