function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

// Typewriter Effect

const texts = [
    "STUDENT"
    
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter

document.getElementById('fireworksButton').addEventListener('click', () => {
    const fireworks = document.createElement('div');
    fireworks.classList.add('fireworks');
    document.body.appendChild(fireworks);
    setTimeout(() => fireworks.remove(), 1500);
});

window.addEventListener('deviceorientation', (event) => {
    const tilt = event.gamma; // left/right tilt
    const dimAmount = Math.min(Math.abs(tilt) / 90, 1);
    document.body.style.background = `rgba(0, 0, 0, ${dimAmount})`;
});

const hammer = new Hammer(document.body);
hammer.on('swipeleft', () => navigateToNextSection());
hammer.on('swiperight', () => navigateToPreviousSection());

const image = document.querySelector('.main-container .image img');
window.addEventListener('deviceorientation', (event) => {
    const xTilt = event.beta; // front/back tilt
    const yTilt = event.gamma; // left/right tilt
    image.style.transform = `rotateX(${xTilt / 10}deg) rotateY(${yTilt / 10}deg)`;
});

