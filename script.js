const terminal = document.getElementById("terminal");

const lines = [
    "Initializing Love OS...",
    "Loading Emotions... ✔",
    "Loading Memories... ✔",
    "Searching Target...",
    "Target Found ❤️",
    "Madam Jee ❤️",
    "Compatibility 100% ✔",
    "Welcome Somi Ahmad ❤️"
];

let i = 0;

function boot() {

    if (i < lines.length) {

        terminal.innerHTML += lines[i] + "<br>";
        i++;
        setTimeout(boot, 700);

    } else {

        setTimeout(showMain, 1200);

    }

}

boot();

function showMain() {

    document.getElementById("boot").style.display = "none";

    document.getElementById("main").style.display = "block";

    typeWriter();

}

const text =
"Madam Jee ❤️ Every moment with you is special. I don't know what the future holds, but I know I want you to be a part of my future. You make my world brighter, my heart happier, and my life more meaningful. ❤️";

let j = 0;

function typeWriter() {

    if (j < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(j);

        j++;

        setTimeout(typeWriter, 35);

    }

}

/* YES BUTTON */

document.getElementById("yes").onclick = function () {

    confetti({
        particleCount: 250,
        spread: 180,
        origin: {
            y: 0.6
        }
    });

    document.getElementById("popup").style.display = "flex";

};

/* CLOSE POPUP */

document.getElementById("closePopup").onclick = function () {

    confetti({
        particleCount: 400,
        spread: 360
    });

    alert("❤️ Thank You Madam Jee ❤️\n\nFrom Ahmad Raza 💍");

};

/* NO BUTTON RUNS AWAY */

const no = document.getElementById("no");

no.addEventListener("mouseover", () => {

    const x = Math.random() * (window.innerWidth - 150);

    const y = Math.random() * (window.innerHeight - 100);

    no.style.position = "fixed";

    no.style.left = x + "px";

    no.style.top = y + "px";

});

/* FLOATING HEARTS */

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.top = "100vh";

    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    heart.style.animation = "floatHeart 5s linear forwards";

    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 5000);

}

setInterval(createHeart, 500);