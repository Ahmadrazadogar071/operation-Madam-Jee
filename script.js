// ==========================
// LOVE OS PREMIUM
// Ahmad Raza ❤️
// ==========================

const terminal = document.getElementById("terminal");

const bootLines = [
"Booting Love OS v3.0...",
"Loading Memories... ✔",
"Scanning Heart... ✔",
"Finding Madam Jee... ❤️",
"Match Found ✔",
"Compatibility: 100%",
"Welcome somi Ahmad ❤️"
];

let line = 0;

function boot(){

if(line < bootLines.length){

terminal.innerHTML += bootLines[line] + "<br>";

line++;

setTimeout(boot,700);

}else{

setTimeout(showMain,1200);

}

}

boot();

function showMain(){

document.getElementById("boot").style.display="none";

document.getElementById("main").style.display="flex";

typeWriter();

}

// ==========================
// TYPE WRITER
// ==========================

const message =
"Dear Madam Jee ❤️\n\nEvery smile of yours makes my day brighter. Every moment with you becomes a beautiful memory. I don't know what tomorrow brings, but I know one thing... I want you beside me in every chapter of my life. ❤️";

let index = 0;

function typeWriter(){

const typing = document.getElementById("typing");

if(index < message.length){

if(message.charAt(index) === "\n"){

typing.innerHTML += "<br>";

}else{

typing.innerHTML += message.charAt(index);

}

index++;

setTimeout(typeWriter,35);

}

}

// ==========================
// YES BUTTON
// ==========================

document.getElementById("yes").onclick=function(){

confetti({

particleCount:300,

spread:180,

origin:{y:0.6}

});

document.getElementById("popup").style.display="flex";

};

// ==========================
// CLOSE POPUP
// ==========================

document.getElementById("closePopup").onclick=function(){

document.getElementById("popup").style.display="none";

confetti({

particleCount:500,

spread:360

});

alert("❤️ Thank You Madam Jee ❤️");

};
// ==========================
// MUSIC BUTTON
// ==========================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("music");

let playing = false;

musicBtn.onclick = function(){

    if(!playing){

        music.play();
        musicBtn.innerHTML = "⏸ Pause Music";
        playing = true;

    }else{

        music.pause();
        musicBtn.innerHTML = "🎵 Music";
        playing = false;

    }

};

// ==========================
// FLOATING HEARTS
// ==========================

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (18 + Math.random()*25) + "px";
    heart.style.animation = "floatHeart 6s linear forwards";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

}

setInterval(createHeart,500);

// ==========================
// PHOTO EFFECT
// ==========================

const photo = document.querySelector(".photo");

photo.addEventListener("mouseenter",()=>{

    photo.style.transform = "scale(1.08) rotate(3deg)";

});

photo.addEventListener("mouseleave",()=>{

    photo.style.transform = "scale(1)";

});

// ==========================
// CARD GLOW
// ==========================

setInterval(()=>{

    document.querySelector(".card").style.boxShadow =
    `0 0 ${30+Math.random()*40}px rgba(255,45,117,.8)`;

},1000);

// ==========================
// SMALL FIREWORKS
// ==========================

function fire(){

    confetti({

        particleCount:40,
        spread:70,
        origin:{
            x:Math.random(),
            y:Math.random()-0.2
        }

    });

}

setInterval(fire,5000);

// ==========================
// LOVE MESSAGE
// ==========================

console.log("❤️ Made with Love by Ahmad Raza ❤️");