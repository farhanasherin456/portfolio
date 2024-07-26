
const dynamicText = document.querySelector("h1 span");
const words = ["Full Stack Web Developer"];


let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;


const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;

    if(!isDeleting && charIndex < currentWord.length) {
        //if the condition is tru type next character
        charIndex++;
        setTimeout(typeEffect, 200);
    }
}

typeEffect();








window.addEventListener("scroll",function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})