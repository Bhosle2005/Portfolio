/* AOS.init();

const text = [
"Cybersecurity Enthusiast",
"Java Developer",
"Python Programmer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){
count++;
index = 0;
}

setTimeout(type,100);
}

const toggleBtn = document.getElementById("theme-toggle");
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
icon.classList.remove("fa-moon");
icon.classList.add("fa-sun");
}else{
icon.classList.remove("fa-sun");
icon.classList.add("fa-moon");
}

});

*/

AOS.init()
AOS.init({
  duration: 1000,
  once: true,
  disable: false   // ✅ IMPORTANT (enables on mobile)
});;

// Typing Effect
const text = [
"Cybersecurity Enthusiast",
"Java Developer",
];

let count = 0;
let index = 0;

function type(){

if(count === text.length){
count = 0;
}

let current = text[count];
let letter = current.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === current.length){
count++;
index = 0;
}

setTimeout(type,150);
}

document.addEventListener("DOMContentLoaded", type);

// Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
icon.classList.replace("fa-moon","fa-sun");
}else{
icon.classList.replace("fa-sun","fa-moon");
}

});

